import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FilledInput,
  OutlinedInput,
  Button,
  Box,
  CircularProgress,
} from '@material-ui/core';
import React, { Component } from 'react';
import './styles/UserForm.css';

export class UserForm extends Component {
  state = {
    loading: true,
  };
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
          <FormControl fullWidth>
            <InputLabel>Nombre: </InputLabel>
            <Input
              type='text'
              name='name'
              onChange={this.props.onChange}
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
              onChange={this.props.onChange}
              value={country}
            />
            <FormHelperText>
              Aqui debes ingresar el pais de origen
            </FormHelperText>
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
          <Box align='center'>{this.state.loading && <CircularProgress />}</Box>
          <Box align='center'>
            <Button
              color="primary"
              variant='contained'
              onClick={() => this.setState({ loading: !this.state.loading })}
            >
              Agregar
            </Button>
            <Button
              color="secondary"
              variant='contained'
              onClick={() => this.setState({ loading: !this.state.loading })}
            >
              Agregar
            </Button>
          </Box>
        </form>
      </div>
    );
  }
}

export default UserForm;
