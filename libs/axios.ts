// src/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Pastikan port sesuai dengan server Laravel Anda
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default api;