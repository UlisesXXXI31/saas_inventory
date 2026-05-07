import { useEffect, useState } from 'react'
import axios from 'axios'
import { Package, Tag, Layers } from 'lucide-react'
import toast, {Toaster}  from 'react-hot-toast';
import ProductoForm from './components/ProductoForm';
import ProductoCard from './components/ProductoCard';
import ProductoList from './components/ProductoList'; // El nuevo componente
import api from '../api/axiosInstance'; // Tu instancia de Axios configurada

function App() {
  const [productos, setProductos] = useState([])
  const [editando, setEditando] = useState(false);
  const [idEnEdicion, setIdEnEdicion] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  // Se crea una variable con los productos filtrados
const productosFiltrados = productos.filter(p => 
  p.nombre.toLowerCase().includes(busqueda.toLowerCase())
);

  const [nuevoProducto, setNuevoProducto] = useState({
  nombre: '',
  descripcion: '',
  precio: 0,
  stock: 0,
  empresa: { id: 1 } // Lo vinculamos a la empresa que creamos
})

  // REEMPLAZA tus llamadas de axios directo por el Service o la instancia 'api'
  const fetchProductos = async () => {
    try {
      // Usamos la instancia que apunta a Render o Local según el .env
      const res = await api.get('/productos/empresa/1');
      setProductos(res.data);
    } catch (err) {
      console.error("Error:", err);
      toast.error("No se pudo conectar con el servidor");
    }
  };

  useEffect(() => {
    fetchProductos()
  }, [])

  const enviarProducto = async () => {
    //VALIDACIONES
     if(!nuevoProducto.nombre.trim()) {
      toast.error("El nombre es obligatorio");
       return;
    }
    if(nuevoProducto.precio <=0){
      toast.error("El precio debe ser mayor a 0");
      return;
    }
    if(nuevoProducto.stock < 0){
      toast.error("El stock no puede ser negativo");
      return;
    } 
    // Si pasamos las validaciones, seguimos con la lógica normal
  try {
    if (editando) {
      // Si estamos editando, disparamos el PUT
      await axios.put(`http://localhost:8080/api/v1/productos/${idEnEdicion}`, nuevoProducto);
      toast.success("Producto actualizado con éxito");  
    } else {
      // Si no, el POST de siempre
      await axios.post('http://localhost:8080/api/v1/productos', nuevoProducto);
      toast.success("Producto guardado con éxito");
    }

    // Limpiamos todo tras el éxito
    setEditando(false);
    setIdEnEdicion(null);
    setNuevoProducto({ nombre: '', descripcion: '', precio: 0, stock: 0, empresa: { id: 1 } });
    fetchProductos(); // Refrescar la lista

  } catch (error) {

    if (error.response && error.response.status === 400) {
    // Si el backend envió errores de validación, los recorremos
    const erroresServidor = error.response.data;
    Object.values(erroresServidor).forEach(mensaje => {
      toast.error(mensaje); // Muestra el mensaje que definiste en Java (@Min, @NotBlank, etc.)
    });
  } else {
    toast.error("Error inesperado en el servidor ❌");
  }
}
};

const eliminarProducto = async (id) => {
  // Una pequeña confirmación para no borrar por error
  if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
    try {
      // Llamamos a tu nuevo EndPoint
      await axios.delete(`http://localhost:8080/api/v1/productos/${id}`);   
      // Actualizamos la pantalla al instante quitando el producto borrado
      setProductos(productos.filter(producto => producto.id !== id));
      toast.success("Producto eliminado con éxito");
      
    } catch (error) {
      console.error("Error al borrar:", error);
      toast.error("Hubo un error al eliminar el producto");
    }
  }
};

const iniciarEdicion = (p) => {
  setNuevoProducto({...p}); // Esto rellena los inputs automáticamente con los datos del producto
  setEditando(true);
  setIdEnEdicion(p.id);
};

const cancelarEdicion = () => {
  // 1. Limpiamos el objeto para que los inputs queden vacíos
  setNuevoProducto({ 
    nombre: '', 
    descripcion: '', 
    precio: 0, 
    stock: 0, 
    empresa: { id: 1 } 
  });
  
  // 2. Quitamos el modo edición para que el botón vuelva a decir "Guardar"
  setEditando(false);
  
  // 3. Reseteamos el ID que estábamos editando
  setIdEnEdicion(null);
};

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'system-ui' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <Package size={48} color="#646cff" /> Panel de Inventario
        </h1>
        <p style={{ color: '#888' }}>Conectado a Spring Boot API v1</p>
      </header>

      <ProductoForm 
       nuevoProducto={nuevoProducto}
       setNuevoProducto={setNuevoProducto}
       enviarProducto={enviarProducto}
       editando={editando}
       cancelarEdicion={cancelarEdicion}
    />
{/* --- BUSCADOR --- */}
<div style={{ marginBottom: '30px', position: 'relative' }}>
  <input
    type="text"
    placeholder="🔍 Buscar por nombre o descripción..."
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
    style={{
      width: '100%',
      padding: '15px 20px',
      borderRadius: '12px',
      border: '1px solid #333',
      backgroundColor: '#2a2a2a',
      color: 'white',
      fontSize: '1rem',
      outline: 'none',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}
  />
  
  {busqueda && (
    <p style={{ color: '#888', marginTop: '10px', fontSize: '0.9rem' }}>
      Mostrando {productosFiltrados.length} resultados para "{busqueda}"
    </p>
  )}
  {/* --- LISTADO (Limpio y escalable) --- */}
  <ProductoList 
        productos={productosFiltrados} 
        iniciarEdicion={iniciarEdicion} 
        eliminarProducto={eliminarProducto} 
  />
</div>

{/* --- LISTADO DE PRODUCTOS (Usando la lista filtrada) --- */}
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
  {productosFiltrados.map((p) => (
    <ProductoCard 
      key={p.id} 
      p={p} 
      iniciarEdicion={iniciarEdicion} 
      eliminarProducto={eliminarProducto} 
    />
  ))}
</div>
      {productos.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px', border: '2px dashed #444', borderRadius: '20px' }}>
          <p style={{ fontSize: '1.2rem' }}>⚠️ Base de Datos vacía. Envía un producto desde Insomnia.</p>
        </div>
      ) : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
  {productos.map((p) => (
    <ProductoCard 
      key={p.id} 
      p={p} 
      iniciarEdicion={iniciarEdicion} 
      eliminarProducto={eliminarProducto} 
    />
  ))}
</div>
      }

      <button 
        onClick={fetchProductos}
        style={{ marginTop: '30px', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#646cff', color: 'white', border: 'none' }}
      >
        🔄 Actualizar Lista
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App