import ProductoCard from './ProductoCard';

// Aplicamos desestructuración para recibir las funciones necesarias
const ProductoList = ({ productos, iniciarEdicion, eliminarProducto }) => {
  if (productos.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', border: '2px dashed #444', borderRadius: '20px' }}>
        <p style={{ fontSize: '1.2rem' }}>⚠️ Base de Datos vacía o sin resultados.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
      {productos.map((p) => (
        <ProductoCard 
          key={p.id} 
          p={p} 
          iniciarEdicion={iniciarEdicion} 
          eliminarProducto={eliminarProducto} 
        />
      ))}
    </div>
  );
};

export default ProductoList;