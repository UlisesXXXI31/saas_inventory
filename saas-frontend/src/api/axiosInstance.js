import axios from 'axios';

// Validamos la existencia de la URL base para asegurar la escalabilidad
const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
    console.error("❌ Error de Infraestructura: VITE_API_URL no está definida en el entorno.");
}

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor de manejo global de errores (Principio de Fail-Fast)
api.interceptors.response.use(
    response => response,
    error => {
        // En un SaaS profesional, aquí mapearías los errores a mensajes amigables
        const message = error.response?.data?.message || error.message;
        console.error('Core-API-Error:', message);
        return Promise.reject(error);
    }
);

export default api;