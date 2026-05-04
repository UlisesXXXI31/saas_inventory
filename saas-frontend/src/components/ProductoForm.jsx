import React from 'react'

const ProductoForm = ({ nuevoProducto, setNuevoProducto, enviarProducto, editando, cancelarEdicion }) => {

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #444',
  backgroundColor: '#333',
  color: 'white',
  flex: '1',
  minwidth: '200px'
}

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#646cff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
  width:'25%'
}

    return ( <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '15px', marginBottom: '30px' }}>
  <h2>Añadir Producto</h2>
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <input 
      type="text" 
      placeholder="Nombre" 
      value={nuevoProducto.nombre}// Esto es para que el input se actualice con el valor del estado y matiene limpia la interfaz
      onChange={(e) => setNuevoProducto({...nuevoProducto, nombre: e.target.value})}
      style={inputStyle} 
    />
    <input
      type="text"
      placeholder="Descripción"
      value={nuevoProducto.descripcion} // Esto es para que el input se actualice con el valor del estado y matiene limpia la interfaz
      onChange={(e) => setNuevoProducto({...nuevoProducto, descripcion: e.target.value})}
      style={inputStyle} 
    />
    <input
      type="number"
      placeholder="Stock"
      value={nuevoProducto.stock} // Esto es para que el input se actualice con el valor del estado y matiene limpia la interfaz
      onChange={(e) => setNuevoProducto({...nuevoProducto, stock: e.target.value})}
      style={inputStyle} 
    />
    <input 
      type="number" 
      placeholder="Precio" 
      value={nuevoProducto.precio} // Esto es para que el input se actualice con el valor del estado y matiene limpia la interfaz
      onChange={(e) => setNuevoProducto({...nuevoProducto, precio: e.target.value})}
      style={inputStyle} 
    />
    <button 
  onClick={enviarProducto} 
  disabled={!nuevoProducto.nombre} // Se desactiva si el nombre está vacío
  style={{
    ...buttonStyle,
    backgroundColor: !nuevoProducto.nombre ? '#444' : '#646cff',
    cursor: !nuevoProducto.nombre ? 'not-allowed' : 'pointer'
  }}>
     {editando ? '💾 Actualizar Producto' : '➕ Guardar Producto'}
</button>
{editando && (
  <button 
    onClick={cancelarEdicion}
    style={{ padding: '10px', background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
  >
    Cancelar
  </button>
)}
  </div>
</div>
    );
}

export default ProductoForm