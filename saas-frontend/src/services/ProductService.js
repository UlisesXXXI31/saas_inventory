import api from '../api/axiosInstance';

/**
 * ProductService: Ahora usa paths relativos para evitar duplicar la URL
 */
const ProductService = {
    
    // Obtener productos por empresa
    // Si la baseURL de Axios es .../api/v1, esto llamará a .../api/v1/productos/empresa/{id}
    getByEmpresa: async (empresaId) => {
        const response = await api.get(`/productos/empresa/${empresaId}`);
        return response.data;
    },

    // Obtener todos
    getAll: async () => {
        const response = await api.get('/productos');
        return response.data;
    },

    // Crear
    create: async (productData) => {
        const response = await api.post('/productos', productData);
        return response.data;
    },

    // Actualizar
    update: async (id, productData) => {
        const response = await api.put(`/productos/${id}`, productData);
        return response.data;
    },
    
    // Eliminar
    delete: async (id) => {
        const response = await api.delete(`/productos/${id}`);
        return response.data;
    }
};

export default ProductService;