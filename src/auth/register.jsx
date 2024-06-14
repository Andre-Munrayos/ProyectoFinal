import React from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useRegister } from './hooks/useRegister';

export const Register = () => {
  const { formik,redirect,paperStyle, titleSection, bodySection, avatarStyle, inputStyle, spanLink } = useRegister();

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundImage: 'url("/bg_login.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Paper elevation={10} style={paperStyle}>
        <section style={titleSection}>
          <Avatar style={avatarStyle}><EditNoteIcon /></Avatar>
          <h2>Registro</h2>
        </section>
        <form onSubmit={formik.handleSubmit} style={bodySection}>
          <TextField id='email' label='Correo Electrónico' type='email' fullWidth required {...formik.getFieldProps('email')} sx={inputStyle} />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <TextField id='name' label='Nombre de Usuario' type='text' fullWidth required {...formik.getFieldProps('name')} sx={inputStyle} />
          {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
          <TextField id='password' label='Contraseña' type='password' fullWidth required {...formik.getFieldProps('password')} sx={inputStyle} />
          {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <span style={spanLink} onClick={redirect}>¿Posees una cuenta? Inicia Sesión</span>
          <Button type='submit' color='success' variant="contained" fullWidth>Regístrate</Button>
        </form>
      </Paper>
    </Grid>
  );
};
