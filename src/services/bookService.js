import {HttpClient} from '../axios';

export class BookService {
    constructor() {
        this.apiClient = new HttpClient();
    }

    // Método simplificado sin userData
    getbook = async (page = 1) => {
        try {
            const response = await this.apiClient.get(`/books?page=${page}`); // Llamada sin userData
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    //metodo para cambiar el estado de disponible y no disponible 
    patchBook = async (bookId, newAvailability) => {
        try {
            const response = await this.apiClient.patch(`/books/${bookId}`, {
                disponible: newAvailability
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    //para agregar libro a la biblioteca del usurio
    addUserBook = async (userId, bookId, estado = false) => {
        try {
            const response = await this.apiClient.post(`/user-books`, {
                user_id: userId,
                book_id: bookId,
                estado: estado
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    // Método para obtener los libros de la biblioteca de un usuario
    getUserBooks = async (userId, page = 1) => {
        try {
            const response = await this.apiClient.get(`/user-books/${userId}?page=${page}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    removeUserBook = async (id) => {
        try {
            const response = await this.apiClient.delete(`/user-books/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    // metodo para cambiar el estado de la biblioteca del usurio
    patchUserBookEstado = async (userBookId, newEstado) => {
        try {
            const response = await this.apiClient.patch(`/user-books/${userBookId}`, { estado: newEstado });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
