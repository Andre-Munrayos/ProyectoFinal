import {HttpClient} from '../axios';

export class RegisterService {
    constructor() {
        this.apiClient = new HttpClient();
    }

    createUser = async (userData) => {
        try {
            const response = await this.apiClient.post('/users', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
