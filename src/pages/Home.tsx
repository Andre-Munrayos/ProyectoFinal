import {BarraApp,Carta} from "../compenets"

export const Home = () => {
  return (
    <>
    <div><BarraApp /></div>
    
    <div className="carta-container">
        <div><Carta img="Lupa2" title="Buscar Libros" txt="Buscar" /></div>
        <div><Carta img="libro" title="Biblioteca Personal" txt="Libros guardados" /></div>
    </div>
    </>
  )
}
