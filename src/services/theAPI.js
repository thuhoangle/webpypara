import axios from 'axios';

const axiosCreate = axios.create({
  baseURL: 'https://socialmedia-66ibb6pdga-uc.a.run.app',
});

export const iniUser = axiosCreate.post('/initiateUser/');

export function getUser(id) {
  return axiosCreate.get(`/getPost/${id}`);
}

export function createPost(id) {
  return axiosCreate.post(`/createPost/${id}`);
}

export function postCmt(id) {
  return axiosCreate.post(`/commentPost/${id}`);
}

export function deletePost(id) {
  return axiosCreate.put(`/deletePost/${id}`);
}
