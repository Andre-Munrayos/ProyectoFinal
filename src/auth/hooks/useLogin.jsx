import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../features';

const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string().required('Requerido')
  });

export const useLogin = () => {
  
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userData = {
          email: values.email,
          password: values.password
        };
        const response = await LoginUser(userData);
        
        if(response.result==='Login successful'){

            localStorage.setItem('a1b2c3','l0g1n');
            localStorage.setItem('user_id',response.user_id);
            navigate('/home');
        }
      } catch (error) {
        
      }
    },
  });

  return {
    formik,
    paperStyle: {
        width: 450,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "3.5rem",
        borderRadius: "8px",
      },
    
    titleSection:{
        display: "flex",
        gap: "1rem",
      },
    
    bodySection : {
        display: "flex",
        flexDirection: "column", 
        gap: "1rem",
        paddingBottom: "1rem",
      },
    
    avatarStyle : {
        backgroundColor: '#f50057',
        marginBottom: 10,
      },
    
    inputStyle : {
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: '#f50057',
          }
        },
        '& label.Mui-focused': {
          color: '#f50057',
        }},
      
    spanLink : {
        color: '#2196F3',
        cursor: 'pointer',
      }
  };
};

 