import axios from 'axios';

export class HttpClient  {
    constructor() {
        this.client = axios.create({
            baseURL: 'http://127.0.0.1:5000/'
        });
        this.client.interceptors.request.use(this.handleRequest);
        this.client.interceptors.response.use(this.handleResponse, this.handleError);
    }

    handleRequest(config) {
        return config;
    }

    handleResponse(response) {
        return response;
    }

    handleError(error) {
        console.error('HTTP Client Error', error);
        return Promise.reject(error);
    }

    get(path) {
        return this.client.get(path);
    }

    post(path, data) {
        return this.client.post(path, data);
    }

    put(path, data) {
        return this.client.put(path, data);
    }

    delete(path) {
        return this.client.delete(path);
    }

    patch(url, data) {
        return this.client.patch(url, data);
    }
}
