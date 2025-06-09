import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;


// Get all tasks
export const fetchAllTasks = () => {
  return axios.get(`${BASE_URL}/task`);
};

// Add a task
export const addTask = (body) =>{
  return axios.post(`${BASE_URL}/saveTask`,body)
}

export const deleteTask=(id)=>{
  return axios.delete(`${BASE_URL}/deleteTask/${id}`)
}

export const editTask=(body)=>{
  return axios.put(`${BASE_URL}/saveTask`, body)
}