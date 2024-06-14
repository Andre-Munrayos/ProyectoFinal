import {HttpClient} from '../axios';

export class LoginService {
    constructor() {
        this.apiClient = new HttpClient();
    }

    postLogin = async (userData) => {
        try {
            const response = await this.apiClient.post('/login', userData);
            
            return response.data;
        } catch (error) {
            
            throw error;
        }
    }
}