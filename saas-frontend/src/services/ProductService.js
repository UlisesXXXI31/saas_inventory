import api from '../api/axiosInstance';

/**
 * Servicio para gestionar productos del SaaS
 * Esta capa es equivalente a un Service en Spring Boot, encargada de manejar la lógica de negocio relacionada con los productos y comunicarse con la API. 
 * Aquí se definen métodos para obtener, crear, actualizar y eliminar productos, utilizando la instancia de axios preconfigurada para realizar las solicitudes HTTP a la API.
 */

const ProductService = {
    // Obtener todos los productos
    getAll: async() => {
       const response = await api.get('/productos');
       return response.data;    
    },



    //Crear un nuevo objeto
    create: async(productData) => {
        const response = await api.post('/productos', productData);
        return response.data;
    },

    //Actualizar un producto existente
    update: async(id, productData) => {
        const response = await api.put(`/productos/${id}`, productData);
        return response.data;
    },
    
    //Eliminar un producto por su ID
    delete: async(id) => {
        const response = await api.delete(`/productos/${id}`);
        return response.data;
    }

}

export default ProductService;