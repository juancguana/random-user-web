import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';
import React from 'react';
import './styles/UserForm.css';

const UserForm = (props) => {
  const { name, country, email } = props.user;
  return (
    <div>
      <form className='form'>
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
      </form>
    </div>
  );
};

export default UserForm;
