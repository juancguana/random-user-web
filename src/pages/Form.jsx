import React, { Component } from 'react';
import ItemUser from '../components/ItemUser';
import UserForm from '../components/UserForm';
import Title from '../components/Title'
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      country: '',
      email: '',
      telefono: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Title text="Ingresa tu propio usuario"/>
        <br />
        <ItemUser user={this.state} />
        <br />
        <UserForm onChange={this.handleChange} user={this.state} />
      </>
    );
  }
}

export default Form;
