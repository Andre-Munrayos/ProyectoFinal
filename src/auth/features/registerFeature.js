import {RegisterService} from '../../services';

const registerService = new RegisterService();

const registerUser = async (userData) => {
    try {
        const result = await registerService.createUser(userData);
        return result;
    } catch (error) {
        throw error;
    }
};

export { registerUser };