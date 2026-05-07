import api from '../api/axiosInstance';

/**
 * ProductService: Capa de abstracción para la API de Productos.
 * Sigue el patrón de diseño de servicios para desacoplar la UI de la red.
 */
const BASE_URL = 'https://saas-inventory-h49i.onrender.com/api/v1';

const ProductService = {
    
    // Obtener productos por empresa (El endpoint que vimos en Swagger)
    getByEmpresa: async (empresaId) => {
        try {
            const response = await api.get(`${BASE_URL}/empresa/${empresaId}`);
            return response.data;
        } catch (error) {
            console.error("Error cargando productos de la empresa:", error);
            throw error;
        }
    },

    // Obtener todos (opcional, según tu controlador)
    getAll: async () => {
        const response = await api.get(BASE_URL);
        return response.data;
    },

    // Crear: Ahora apunta a /api/v1/productos
    create: async (productData) => {
        const response = await api.post(BASE_URL, productData);
        return response.data;
    },

    // Actualizar: /api/v1/productos/{id}
    update: async (id, productData) => {
        const response = await api.put(`${BASE_URL}/${id}`, productData);
        return response.data;
    },
    
    // Eliminar: /api/v1/productos/{id}
    delete: async (id) => {
        const response = await api.delete(`${BASE_URL}/${id}`);
        return response.data;
    }
};

export default ProductService;