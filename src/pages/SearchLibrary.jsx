import React,{useEffect,useState} from "react";
import { Button, Pagination, TextField } from "@mui/material";
import { BarraApp, Tabla } from "../compenets";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";
import {allbooks,changeBookAvailability,addUserBook} from "../features/bookFeature";

export const SearchLibrary = () => {
  const navigate = useNavigate();
  const [books,setBooks] = useState([]);
  const [loading,setLoading] = useState(false);
  const [totalPage,setTotalPage]=useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState([]);
const [searchText, setSearchText] = useState('');

useEffect(() => {
  const fetchData = async () => {
      setLoading(true);
      try {
          const response = await allbooks(currentPage);
          if (response && response.books) {
              setTotalPage(response.total_pages);
              setBooks(response.books.filter(book => !book.disponible));
              setFilteredBooks(response.books.filter(book => !book.disponible));
          }
      } catch (error) {
      } finally {
          setLoading(false);
      }
  };

  fetchData();
}, [currentPage]);

useEffect(() => {
  const filtered = books.filter(book =>
      !searchText || book.Titulo.toLowerCase().includes(searchText.toLowerCase())
  );
  setFilteredBooks(filtered);
}, [searchText, books]);

const handleToggleAvailability = async (bookId, newAvailability) => {
  const user_id = localStorage.getItem('user_id') 
  if (!bookId) {
      
      return;
  }
  await changeBookAvailability(bookId, newAvailability);
  await addUserBook(user_id,bookId);
  setBooks(currentBooks => currentBooks.filter(book => book.id !== bookId));
  setFilteredBooks(currentFilteredBooks => currentFilteredBooks.filter(book => book.id !== bookId));
};

    const handlePageChange = (event, page) => {
    setCurrentPage(page); 
    };

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
        {loading ? ("cargando...") : (<Tabla books={filteredBooks} changeAvailability={handleToggleAvailability} />)}
        
      </div>
      <div className="pagination-kontainer">
      <Pagination
          count={totalPage}
          defaultPage={1}
          page={currentPage} 
          onChange={handlePageChange} 
          color="primary"
        />
      </div>
    </div>
  );
};
