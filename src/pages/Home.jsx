import React from "react";
import { BarraApp, Carta } from "../compenets";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <BarraApp />
      </div>

      <div className="carta-container">
        <div onClick={() => navigate("/search")}>
          <Carta img="Lupa2.png" title="Buscar Libros" txt="Buscar" />
        </div>
        <div onClick={() => navigate("/library")}>
          <Carta
            img="libro.png"
            title="Biblioteca Personal"
            txt="Libros guardados"
          />
        </div>
      </div>
    </>
  );
};