import axios from 'axios';
import { BASE_URL } from '../config/environment';

axios.defaults.baseURL = BASE_URL;

export const getAllUsers = async () => {
    try {
        const response = await axios.get('/api/users');
        return response.data
    } catch (error) {
        throw error.response.data;
    }
};

export const getUser = async (id) => {
    try {
        const response = await axios.get(`/api/users/${id}`)
        return response.data
    } catch (error) {
        throw error.response.data;
    }
}