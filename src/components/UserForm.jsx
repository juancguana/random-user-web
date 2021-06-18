import React, { Component } from 'react'
import './styles/UserForm.css'

export class UserForm extends Component {


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onChange(this.state)
    console.log()
  }

  render() {
    const  { name, country, email } = this.props.user;
    return (
      <div>
        <h2 className="title-form">Nuevo Usuario</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-form">
            <label>Nombre: </label>
            <input type="text" name="name" onChange={this.props.onChange} value={name}/>
          </div>
          <div className="input-form">
            <label>Pais: </label>
            <input type="text" name="country" onChange={this.props.onChange} value={country}/>
          </div>
          <div className="input-form">
            <label>Correo Electronico: </label>
            <input type="text" name="email" onChange={this.props.onChange} value={email}/>
          </div>
          <button>Agregar</button>
        </form>
        
      </div>
    )
  }
}

export default UserForm
