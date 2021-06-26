import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Box,
  Button
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom'
import './styles/UserForm.css';
import axios from 'axios';

const UserForm = (props) => {
  const { name, country, email } = props.user;
  const history = useHistory()

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(props.user);
    try {
      await axios.post("http://localhost:3000/users",props.user);
      history.push('/list')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel>Nombre: </InputLabel>
          <Input
            type='text'
            name='name'
            onChange={props.onChange}
            value={name}
          />
          <FormHelperText>
            Aqui debes ingresar tu nombre y apellido
          </FormHelperText>
        </FormControl>
        <br />
        <FormControl fullWidth>
          <InputLabel>Pais: </InputLabel>
          <Input
            type='text'
            name='country'
            onChange={props.onChange}
            value={country}
          />
          <FormHelperText>Aqui debes ingresar el pais de origen</FormHelperText>
        </FormControl>
        <br />
        <FormControl fullWidth>
          <InputLabel>Correo Electronico: </InputLabel>
          <Input
            type='text'
            name='email'
            onChange={props.onChange}
            value={email}
          />
          <FormHelperText>Aqui debes ingresar un email</FormHelperText>
        </FormControl>
        <Box align="center">
          <Button type="submit" color="primary" variant="contained">Crear</Button>
        </Box>
      </form>
    </div>
  );
};

export default UserForm;
