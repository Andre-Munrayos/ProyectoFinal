import React from "react";
import { Button, TextField } from "@mui/material";
import { BarraApp, TablaPersonal } from "../compenets";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";

export const PersonalLibrary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BarraApp />
      <br />
      <div className="inputsearch-kontainer">
        <Button
          variant="contained"
          startIcon={<KeyboardReturnIcon />}
          onClick={() => navigate("/")}
        >
          Regresar
        </Button>
        <TextField
          className="inputsearch-field"
          id="outlined-basic"
          label="Busqueda"
          variant="outlined"
        />
      </div>
      <div>
        <TablaPersonal />
      </div>
    </div>
  );
};
