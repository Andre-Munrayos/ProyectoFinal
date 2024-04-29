import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(Titulo, Autor, Editorial, Año, Genero, Idioma) {
  return { Titulo, Autor, Editorial, Año, Genero, Idioma };
}

const rows = [
  createData("Frozen yoghurt", "159", "6.0", 24, "4.0", "0"),
  createData("Ice cream sandwich", "237", "9.0", 37, "4.3", "0"),
  createData("Eclair", "262", "16.0", 24, "6.0", "0"),
  createData("Cupcake", "305", "3.7", 67, "4.3", "0"),
  createData("Gingerbread", "356", "16.0", 49, "3.9", "0"),
  createData("Gingerbread", "0", "0.0", 49, "0.9", "0"),
];

export const Tabla = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Libros</TableCell>
            <TableCell align="right">Autor&nbsp;(es)</TableCell>
            <TableCell align="right">Editorial</TableCell>
            <TableCell align="right">Año</TableCell>
            <TableCell align="right">Genero</TableCell>
            <TableCell align="right">Idioma</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.Titulo + index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Titulo}
              </TableCell>
              <TableCell align="right">{row.Autor}</TableCell>
              <TableCell align="right">{row.Editorial}</TableCell>
              <TableCell align="right">{row.Año}</TableCell>
              <TableCell align="right">{row.Genero}</TableCell>
              <TableCell align="right">{row.Idioma}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
