import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FilledInput,
  OutlinedInput,
  Button,
  Box
} from '@material-ui/core';
import React, { Component } from 'react';
import './styles/UserForm.css';

export class UserForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onChange(this.state);
    console.log();
  };

  render() {
    const { name, country, email } = this.props.user;
    return (
      <div>
        <h2 className='title-form'>Nuevo Usuario</h2>
        <form className='form' onSubmit={this.handleSubmit}>
          <FormControl fullWidth >
            <InputLabel>Nombre: </InputLabel>
            <Input
              type='text'
              name='name'
              onChange={this.props.onChange}
              value={name}
            />
            <FormHelperText>Aqui debes ingresar tu nombre y apellido</FormHelperText>
          </FormControl>
          <br />
          <FormControl fullWidth>
            <InputLabel>Pais: </InputLabel>
            <Input
              type='text'
              name='country'
              onChange={this.props.onChange}
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
              onChange={this.props.onChange}
              value={email}
            />
            <FormHelperText>Aqui debes ingresar un email</FormHelperText>
          </FormControl>
          <br />
          <Box align="center">
            <Button variant="outlined">Agregar</Button>
          </Box>
        </form>
      </div>
    );
  }
}

export default UserForm;
