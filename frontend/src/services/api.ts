import axios from 'axios';
import { baseURL } from '@/services/apiPaths.ts';

export const api = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});