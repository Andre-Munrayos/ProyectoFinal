import React from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useLogin } from './hooks/useLogin';
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { formik, paperStyle, titleSection, bodySection, avatarStyle, inputStyle, spanLink, error } = useLogin();

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundImage: 'url("/bg_login.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Paper elevation={10} style={paperStyle}>
        <section style={titleSection}>
          <Avatar style={avatarStyle}><AccountBoxIcon /></Avatar>
          <h2>Inicia Sesión</h2>
        </section>
        <form onSubmit={formik.handleSubmit} style={bodySection}>
          <TextField
            id='email'
            label='Correo electrónico'
            type='email'
            fullWidth
            required
            {...formik.getFieldProps('email')}
            sx={inputStyle}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <TextField
            id='password'
            label='Contraseña'
            type='password'
            fullWidth
            required
            {...formik.getFieldProps('password')}
            sx={inputStyle}
          />
          {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <span style={spanLink} onClick={() => navigate('/register')}>No tienes cuenta? Registrate</span>
          <Button type='submit' color='success' variant="contained" fullWidth>Login</Button>
        </form>
      </Paper>
    </Grid>
  );
};




