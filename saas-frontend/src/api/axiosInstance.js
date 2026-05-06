import axios from 'axios';

// Limpiamos la URL de posibles corchetes, comillas o espacios accidentales
const getCleanBaseURL = () => {
    let url = import.meta.env.VITE_API_URL || "";
    // Elimina corchetes [], comillas y espacios
    return url.replace(/[\[\]"']/g, "").trim();
};

const baseURL = getCleanBaseURL();

if (!baseURL) {
    console.error("❌ Error de Infraestructura: VITE_API_URL no está definida.");
}

const api = axios.create({
    baseURL: baseURL, 
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor con lógica de negocio (Principio de Fail-Fast)
api.interceptors.response.use(
    response => response,
    error => {
        // Mapeo senior de errores
        if (error.code === 'ERR_CONNECTION_REFUSED') {
            console.error("🚨 El servidor backend está caído o la URL es incorrecta.");
        }
        const message = error.response?.data?.message || error.message;
        console.error('Core-API-Error:', message);
        return Promise.reject(error);
    }
);

export default api;