import axios from 'axios';

const API_URL = 'http://localhost:3000/users/';

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface LoginResponse {
    success: boolean;
    token?: string; // Suponiendo que necesitarás implementar JWT después.
}

// Función para registrar un usuario
export const registerUser = async (userData: User) => {
    try {
        const response = await axios.post(API_URL, userData);
        if (response.data) {
            console.log('User registered:', response.data);
            return response.data;
        }
    } catch (error) {
        throw new Error('Unable to register user');
    }
};

// Función para iniciar sesión
export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const users = await axios.get(API_URL);
        const foundUser = users.data.find((user: User) => user.email === email && user.password === password);
        if (foundUser) {
            // Aquí deberías devolver un token real generado por el servidor
            return { success: true, token: email };
        } else {
            return { success: false };
        }
    } catch (error) {
        throw new Error('Login failed');
    }
};
