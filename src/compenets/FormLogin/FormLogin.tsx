import { Button, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'


export const FormLogin = () => {
  return (
    <div className="formLogin-background">
        <h1 style={{ textAlign: "center" }}>Inicia Sesion</h1>
        <div className="formLogin-form" style={{ marginTop: "2rem" }}>
            <div>
            <TextField
                className="formLogin-input"
                label="Correo Electrónico"
                type="email"
                variant="outlined"
            />
            </div>
            <br />
            <div>
                <TextField
                    className="formLogin-input"
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
            </div>
            <div>
                <Button variant="contained" color='success' endIcon={<SendIcon />} style={{ marginTop: "2rem", width: "12rem"}} >
                Iniciar Sesion
                </Button>
            </div>
        </div>
    </div>
  )
}
