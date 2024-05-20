import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Grid, Paper,Avatar, TextField, Button } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';

 export const Register = () => {
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
    navigate('/');
  }


  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh',  backgroundImage: 'url("/bg_login.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center', }}>
      <Paper elevation={10} style={paperStyle}>
        <section style={titleSection}>
          <Avatar style={avatarStyle}><EditNoteIcon /></Avatar>
          <h2>Registro</h2>
        </section>
        <form onSubmit={handleSubmit} style={bodySection}>
        <TextField label='Correo Electrónico' type='email' fullWidth required sx={inputStyle}/>
        <TextField label='Nombre de Usuario' type='text' fullWidth required sx={inputStyle}/>
        <TextField label='Contraseña' type='password' fullWidth required sx={inputStyle} />
        <span style={spanLink} onClick={() => navigate('/')}>Posees una cuenta? Inicia Sesión</span>
        <Button type='Submit' color='success' variant="contained" fullWidth>Registrate</Button>
        </form>
      </Paper>
    </Grid>
  )
}
