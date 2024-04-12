import { Button, TextField } from "@mui/material"
import {BarraApp, TablaPersonal} from "../compenets"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export const PersonalLibrary = () => {
  return (

    <div>
        <BarraApp />
        <br />
        <div className="inputsearch-kontainer">
        <Button variant="contained" startIcon={<KeyboardReturnIcon />}>
            Regresar
        </Button>
        <TextField className="inputsearch-field" id="outlined-basic" label="Busqueda" variant="outlined" />
        </div>
        <div>
       
            <TablaPersonal />
        </div>
        
    </div>
  )
}