import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { truncateString } from "../../utils";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';

export const Tabla = ({books,changeAvailability}) => {
  
  if (!books || !books.length) {
    return <div>No hay libros disponibles.</div>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Libros</TableCell>
            <TableCell align="right">Titulo</TableCell>
            <TableCell align="right">Autor&nbsp;(es)</TableCell>
            <TableCell align="right">Editorial</TableCell>
            <TableCell align="right">Fecha de publicación</TableCell>
            <TableCell align="right">ISBN</TableCell>
            <TableCell align="right">Número de páginas</TableCell>
            <TableCell align="right">Genero</TableCell>
            <TableCell align="right">Idioma</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {books.map((row, index) => (
        <TableRow key={row.Titulo + index}>
        <TableCell component="th" scope="row">
          {truncateString(row.Titulo, 25)}
        </TableCell>
        <TableCell align="right">{truncateString(row.Titulo, 25)}</TableCell>
        <TableCell align="right">{truncateString(row['Autor(es)'] ? row['Autor(es)'].join(', ') : "", 20)}</TableCell>
        <TableCell align="right">{truncateString(row.Editorial, 15)}</TableCell>
        <TableCell align="right">{truncateString(row['Fecha de publicación'], 10)}</TableCell>
        <TableCell align="right">{truncateString(row['ISBN'], 15)}</TableCell>
        <TableCell align="right">{row['Número de páginas']}</TableCell>
        <TableCell align="right">{truncateString(row.Genero, 15)}</TableCell>
        <TableCell align="right">{truncateString(row.Idioma, 10)}</TableCell>
        <TableCell align="right">
          <IconButton onClick={() => changeAvailability(row.id, !row.disponible)}>
           <AddCircleOutlineIcon />
          </IconButton>
        </TableCell>
      </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
