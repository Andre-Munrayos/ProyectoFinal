import React, { useEffect, useState } from "react";
import { Button,Pagination, TextField } from "@mui/material";
import { BarraApp, TablaPersonal } from "../compenets";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";
import { getUserBooks, removeUserBook, changeBookAvailability,changeUserBookEstado } from "../features/bookFeature";

export const PersonalLibrary = () => {
  // funciones 
  const navigate = useNavigate();//navegacion
  const [books, setBooks] = useState([]);//traer el valor de los libros
  const [loading, setLoading] = useState(false);//la carga de los datos
  const [totalPage,setTotalPage]=useState(0);// metodo para el total de paginas 
  const [currentPage, setCurrentPage] = useState(1);// metodo para el cambio de pagina
  const [filteredBooks, setFilteredBooks] = useState([]);// filtrar los libros 
  const [searchText, setSearchText] = useState('');// realizar las busquedes 

  // guardar el id y cambio de la paginacion
  const fetchBooks = async (page) => {
    const user_id = localStorage.getItem('user_id');
    setLoading(true);
    try {
      const response = await getUserBooks(user_id, page);
      if (response) {
        setBooks(Array.isArray(response.books) ? response.books : []);
        setTotalPage(response.total_pages);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage]);

  // filtra la busqueda de datos
  useEffect(() => {
    const filtered = books.filter(book =>
        !searchText || book.bookTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchText, books]);

  //Remover datos de la tabla
  const handleToggleAvailability = async (bookId, newAvailability, register_id) => {
    if (!bookId) {
      return;
    }
    try {
      await changeBookAvailability(bookId, newAvailability);
      await removeUserBook(register_id);
      setBooks(currentBooks => currentBooks.filter(book => book._id !== register_id));
      setFilteredBooks(currentFilteredBooks => currentFilteredBooks.filter(book => book.id !== bookId));
    } catch (error) {
    }
  };

  // cambiar el estado de los datos 
  const handleToggleState = async (newState, register_id,bookId) => {
    if (!bookId) {
      
      return;
    }
    try {
      await changeUserBookEstado(register_id, newState);
      setBooks(currentBooks => currentBooks.map(book => book._id === register_id ? { ...book, estado: newState } : book));// uso de un spreat para compara entre los ultimo cambios con los nuevos
      setFilteredBooks(currentFilteredBooks => currentFilteredBooks.filter(book => book.id !== bookId));
    } catch (error) {
    }
  };

  //cambio de pagina
  const handlePageChange = (event, page) => {
    setCurrentPage(page); // actualiza la pagina actual
    };
  // buscar datos en el textfield
    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };



  return (
    <div>
      <BarraApp />
      <br />
      <div className="inputsearch-kontainer">
        <Button
          variant="contained"
          startIcon={<KeyboardReturnIcon />}
          onClick={() => navigate("/home")}
        >
          Regresar
        </Button>
        <TextField
          className="inputsearch-field"
          id="outlined-basic"
          label="Busqueda"
          variant="outlined"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        {loading ? ("cargando...") : (<TablaPersonal books={filteredBooks} changeAvailability={handleToggleAvailability} changeState={handleToggleState} />)} 
      </div>
      <div className="pagination-kontainer">
      <Pagination
          count={totalPage}
          defaultPage={1}
          page={currentPage} 
          onChange={handlePageChange} // maneja el cambio de pagina
          color="primary"
        />
      </div>
    </div>
  );
};
