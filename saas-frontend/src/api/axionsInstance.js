import axios from 'axios';

//creamos una instancioa de axios preconfigurada con la url base de nuestra api
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});



//interceptor de manejo global de errores
api.interceptors.response.use(
    response => response,
    error => {
        // Aquí puedes manejar los errores globalmente, por ejemplo, mostrando una notificación
        console.error('APIError:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;