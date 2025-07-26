import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/blogs';
const API_URL = import.meta.env.VITE_BASE_URL;

export const saveDraft = async (data) => {
    const response = await axios.post(`${API_URL}/save-draft`, data);
    return response.data;
};

export const publishBlog = async (data) => {
    const response = await axios.post(`${API_URL}/publish`, data);
    return response.data;
};

export const getAllBlogs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getBlogById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const deleteBlog = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}