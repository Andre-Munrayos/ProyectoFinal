import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features';

const validationSchema = Yup.object({
  email: Yup.string().email('Email inválido').required('Requerido'),
  name: Yup.string().required('Requerido'),
  password: Yup.string().required('Requerido')
});

export const useRegister = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userData = {
          email: values.email,
          name: values.name,
          password: values.password
        };
        const user = await registerUser(userData); // asegurate que registerUser esten definido e importado
        
        navigate('/'); // navegar despues de la operacion exitosa
      } catch (error) {
        
      }
    },
  });

  const redirect = () => {

    formik.resetForm();
    navigate('/');
  }

  return {
    formik,
    redirect,
    paperStyle: {
      width: 450,
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "3.5rem",
      borderRadius: "8px",
    },
    titleSection: {
      display: "flex",
      gap: "1rem",
    },
    bodySection: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      paddingBottom: "1rem",
    },
    avatarStyle: {
      backgroundColor: '#f50057',
      marginBottom: 10,
    },
    inputStyle: {
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#f50057',
        }
      },
      '& label.Mui-focused': {
        color: '#f50057',
      }
    },
    spanLink: {
      color: '#2196F3',
      cursor: 'pointer',
    }
  };
};