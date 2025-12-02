import API from '../api/axios';


export const fetchEmployees = (params) => API.get('/emp/employees', { params });
export const getEmployee = (id) => API.get(`/emp/employees/${id}`);
export const createEmployee = (formData) => API.post('/emp/employees', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
export const updateEmployee = (id, formData) => API.put(`/emp/employees/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
export const deleteEmployee = (id) => API.delete('/emp/employees', { params: { eid: id } });