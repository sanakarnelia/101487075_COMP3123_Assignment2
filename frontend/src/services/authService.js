import API from '../api/axios';


export const signup = (payload) => API.post('/user/signup', payload);
export const login = (payload) => API.post('/user/login', payload);