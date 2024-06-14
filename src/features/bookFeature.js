import {BookService} from '../services/bookService';

const bookService = new BookService();
// metodo par traer todos los datos de books
export const allbooks = async (page = 1) => {
    try {
        const result = await bookService.getbook(page);

        return result;
    } catch (error) {
        
        throw error;
    } 
};
// metodo cambiar el estado a no disponible 
export const changeBookAvailability = async (bookId, newAvailability) => {
    try {
        const result = await bookService.patchBook(bookId, newAvailability);
        return result;
    } catch (error) {
        throw error;
    }
};
// metodo para add libros biblioteca personal
export const addUserBook = async (userId, bookId, estado = false) => {
    try {
        const result = await bookService.addUserBook(userId, bookId, estado);
        return result;
    } catch (error) {
        throw error;
    }
};
// para obeter los datos del usuario y la pagina
export const getUserBooks = async (userId, page = 1) => {
    try {
        const result = await bookService.getUserBooks(userId, page);
        return result;
    } catch (error) {
        throw error;
    }
};
// remover los libros 
export const removeUserBook = async (id) => {
    try {
        const result = await bookService.removeUserBook(id);
        return result;
    } catch (error) {
        throw error;
    }
};
// cambiar el estado de los libros de leido o no leido 
export const changeUserBookEstado = async (userBookId, newEstado) => {
    try {
        const result = await bookService.patchUserBookEstado(userBookId, newEstado);
        
        return result;
    } catch (error) {
       
        throw error;
    }
};