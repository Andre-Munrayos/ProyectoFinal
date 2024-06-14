import {LoginService} from '../../services';

const loginService = new LoginService();

const LoginUser = async (userData) => {
    try {
        const result = await loginService.postLogin(userData);
        return result;
    } catch (error) {
        throw error;
    }
};

export { LoginUser };