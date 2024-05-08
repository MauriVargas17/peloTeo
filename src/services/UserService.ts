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

// Funcion para recuperar la informacion del usuario y desplegarla
export const retrieveUser = async (email: string) => {
    try {
        const users = await axios.get(API_URL);
        const foundUser = users.data.find((user: User) => user.email === email);
        return foundUser;
    } catch (error) {
        throw new Error('Retrieve failed');
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

// Función para actualizar la informacion de usuario
export const updateUser = async (userId: string, userData: any) => {
    try {
        const PUT_URL = API_URL + userId;
        console.log('put url', PUT_URL)
        const response = await axios.put(PUT_URL, userData);
        if (response.data) {
            console.log('User updated:', response.data);
            return response.data;
        }
    } catch (error) {
        throw new Error('Unable to update user');
    }
};
