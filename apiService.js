import axios from 'axios';

// const API_BASE_URL = "http://10.1.105.70:8000/";
// const API_BASE_URL = "http://192.168.1.142:8000/";
// const API_BASE_URL = "http://10.1.105.14:8000/";
const API_BASE_URL = "http://10.1.105.30:8000/";

const apiService = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

export const registerUser = async (userData) => {
    try {
        const response = await apiService.post('/api/users/register/', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await apiService.post('/api/users/login/', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
  
  // Operación: Obtener lista de usuarios
  export const getUsers = async () => {
    try {
      const response = await apiService.get('/api/users/');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Operación: Obtener un usuario por Username
  export const getUserByUsername = async (userUsername) => {
    try {
      const response = await apiService.get(`/admin/auth/user/?q=${userUsername}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Operación: Actualizar usuario
  export const updateUser = async (userId, updatedUserData) => {
    try {
      const response = await apiService.put(`/api/users/${userId}/change`, updatedUserData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Operación: Eliminar usuario
  export const deleteUser = async (userId) => {
    try {
      const response = await apiService.delete(`/api/users/${userId}/delete`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };