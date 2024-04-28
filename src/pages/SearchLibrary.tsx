
import { Button, Pagination, TextField } from "@mui/material"
import {BarraApp, Tabla} from "../compenets"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useNavigate } from 'react-router-dom';

export const SearchLibrary = () => {
  const navigate = useNavigate();
  return (

    <div>
        <BarraApp />
        <br />
        <div className="inputsearch-kontainer">
        <Button variant="contained" startIcon={<KeyboardReturnIcon />} onClick={()=> navigate('/')}>
            Regresar
        </Button>
        <TextField className="inputsearch-field" id="outlined-basic" label="Busqueda" variant="outlined" />
        </div>
        <div>
            <Tabla />
        </div>
        <div className="pagination-kontainer">
        <Pagination count={4} defaultPage={1} color="primary"  />
        </div>
    
    </div>
  )
}