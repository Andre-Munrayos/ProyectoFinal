import React from 'react'
import { Grid, Paper,Avatar, TextField, Button } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {useNavigate} from 'react-router-dom'

 export const Login = () => {
  const navigate = useNavigate();

  const paperStyle = {
    width: 450,
    display: "flex",
    "flex-direction": "column",
    gap: "1rem",
    padding: "3.5rem",
    "border-radius": "8px",
  };

  const titleSection = {
    display: "flex",
    gap: "1rem",
  }

  const bodySection = {
    display: "flex",
    "flex-direction": "column", 
    gap: "1rem",
    "padding-bottom": "1rem",
  }

  const avatarStyle = {
    backgroundColor: '#f50057',
    marginBottom: 10,
  };

  const inputStyle = {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#f50057',
      }
    },
    '& label.Mui-focused': {
      color: '#f50057',
    }}
  
  const spanLink = {
    color: '#2196F3',
    cursor: 'pointer',
  }
  
  const handleSubmit = () => {
    navigate('/home')
  }

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh',  backgroundImage: 'url("/bg_login.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center', }}>
      <Paper elevation={10} style={paperStyle}>
        <section style={titleSection}>
          <Avatar style={avatarStyle}><AccountBoxIcon /></Avatar>
          <h2>Inicia Sesión</h2>
        </section>
        <form onSubmit={handleSubmit} style={bodySection}>
          <TextField label='Correo electrónico' type='email' fullWidth required sx={inputStyle}/>
          <TextField label='Contraseña' type='password' fullWidth required sx={inputStyle} />
          <span style={spanLink} onClick={() => navigate('/register')}>No tienes cuenta? Registrate</span>
          <Button type='Submit' color='success' variant="contained" fullWidth>Login</Button>
        </form>
      </Paper>
    </Grid>
  )
}



