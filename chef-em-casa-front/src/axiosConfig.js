import axios from 'axios';

// Função para configurar o axios com o token JWT
const setAuthToken = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;
