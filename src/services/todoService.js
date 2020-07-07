import { baseAPI as api } from './api';

export const getTodos = async () => {
  try {
    const response = await api.get('/todos');
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getTodo = async (id) => {
  try {
    const response = await api.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const addTodo = async (data) => {
  try {
    const response = await api.post('/todos', data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const updateTodo = async (id, data) => {
  try {
    const response = await api.put(`/todos/${id}`, data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
