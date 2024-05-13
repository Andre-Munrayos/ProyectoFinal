import React from 'react'
import { Grid, Paper,Avatar, TextField, FormGroup, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

 export const Login = props => {
  const navigate = useNavigate();
  const paperContainerStyle = {
    padding: 40,
    height: '200vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const paperStyle = {
    width: 350,
  };

  const avatarStyle = {
    backgroundColor: '#f50057',
    marginBottom: 10,};


  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Paper elevation={10} style={paperStyle}>
        <Avatar style={avatarStyle}><AccountBoxIcon /></Avatar>
        <h2> Sing in</h2>
        <TextField label='Username' placeholder='Enter username' fullWidth required />
        <TextField label='Password' placeholder='Enter Password'type='password' fullWidth required />
        <div>
          <Checkbox 
            sx={{
              color: pink[800],
              '&.Mui-checked': {
                color: pink[600],
              },
            }}
          />
          Recordar conrtaseña
        </div>
        <Button type='Submit' color='primary' variant="contained" fullWidth>Sing in</Button>
       
      </Paper>
    </Grid>
  )
}



