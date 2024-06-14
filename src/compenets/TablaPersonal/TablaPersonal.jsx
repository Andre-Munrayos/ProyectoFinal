import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { truncateString } from "../../utils";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const TablaPersonal = ({ books, changeAvailability,changeState }) => {

  if (!Array.isArray(books) || books.length === 0) {
    return <div>No hay libros disponibles.</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Libros</TableCell>
            <TableCell align="right">Titulo</TableCell>
            <TableCell align="right">Autor(es)</TableCell>
            <TableCell align="right">Editorial</TableCell>
            <TableCell align="right">Fecha de publicación</TableCell>
            <TableCell align="right">ISBN</TableCell>
            <TableCell align="right">Número de páginas</TableCell>
            <TableCell align="right">Género</TableCell>
            <TableCell align="right">Idioma</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((row, index) => (
            <TableRow key={row.userBookId || index}>
              <TableCell component="th" scope="row">
                {truncateString(row.bookTitle, 25)}
              </TableCell>
              <TableCell align="right">{truncateString(row.bookTitle, 25)}</TableCell>
              <TableCell align="right">{truncateString(Array.isArray(row.bookAuthor) ? row.bookAuthor.join(', ') : row.bookAuthor, 20)}</TableCell>
              <TableCell align="right">{truncateString(row.bookPublisher, 15)}</TableCell>
              <TableCell align="right">{truncateString(row.bookYear, 10)}</TableCell>
              <TableCell align="right">{truncateString(row.bookIsbn, 15)}</TableCell>
              <TableCell align="right">{row.bookNumPage}</TableCell>
              <TableCell align="right">{truncateString(row.bookGenre, 15)}</TableCell>
              <TableCell align="right">{truncateString(row.bookLanguage, 10)}</TableCell>
              <TableCell align="right">
              <IconButton onClick={() => changeState(!row.estado, row._id, row.userBookId)}>
              {row.estado ? (<VisibilityIcon />) : (<VisibilityOffIcon />)}
                </IconButton>
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => changeAvailability(row.userBookId, row.estado, row._id)}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
