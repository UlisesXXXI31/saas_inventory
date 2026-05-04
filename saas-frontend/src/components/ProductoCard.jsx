import React from 'react';

const ProductoCard = ({ p, eliminarProducto, iniciarEdicion }) => {
  // Definimos los estilos aquí dentro para que el componente sea independiente
  const btnStyle = {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bold'
  };
  const deleteButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#ff4444',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
  width: '25%'
};

  return (
    <div style={{ 
      background: '#242424', 
      padding: '20px', 
      borderRadius: '15px', 
      border: '1px solid #333',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      {/* Parte Superior: Información */}
      <div>
        <h2 style={{ margin: '0 0 10px 0', color: '#646cff' }}>{p.nombre}</h2>
        <p style={{ color: '#ccc', fontSize: '0.9rem' }}>{p.descripcion}</p>
        <hr style={{ borderColor: '#444', margin: '15px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{p.precio}€</span>
          <span style={{ background: '#444', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>
            Stock: {p.stock}
          </span>
        </div>
      </div>

      {/* Parte Inferior: Botones (Ahora dentro del return y del div principal) */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button 
          onClick={() => iniciarEdicion(p)} 
          style={{ ...btnStyle, backgroundColor: '#2196F3' }}
        >
          Editar
        </button>
        <button 
          onClick={() => eliminarProducto(p.id)} 
          style={{ ...btnStyle, backgroundColor: '#f44336' }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductoCard;