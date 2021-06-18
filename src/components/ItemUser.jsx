import React from 'react';
import './styles/ItemUser.css';
import PropTypes from 'prop-types'

class ItemUser extends React.Component {
  state = {};
  render() {
    const { name, country, email, telefono } = this.props.user;
    return (
      <div className='details'>
        <p>
          <strong>Nombre: </strong> {name}
        </p>
        <p>
          <strong>Pais: </strong> {country}
        </p>
        <p>
          <strong>Correo: </strong> {email}
        </p>
        { telefono &&
        <p>
          <strong>Telefono: </strong> {telefono}
        </p>
        }
      </div>
    );
  }
}

ItemUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string
  })
}

ItemUser.defaultProps = {
  user: {
    name: 'Mi nombre por defecto',
    country: 'Mi pais por defecto',
    email: 'Mi email por defecto'
  }
}

export default ItemUser;
