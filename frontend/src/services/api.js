import axios from 'axios';

const API = axios.create({
  baseURL: 'https://hrms-lite-hn4f.onrender.com'
});

export const addEmployee = (data) => API.post('/employees', data);
export const getEmployees = () => API.get('/employees');
export const deleteEmployee = (id) => API.delete(`/employees/${id}`);

export const markAttendance = (data) => API.post('/attendance', data);
export const getAttendance = (empId) => API.get(`/attendance/${empId}`);
