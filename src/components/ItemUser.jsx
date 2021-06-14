import React from 'react';
import './styles/ItemUser.css';
import PropTypes from 'prop-types'

class ItemUser extends React.Component {
  state = {};
  render() {
    const { name, coutry, email } = this.props.user;
    return (
      <div className='details'>
        <p>
          <strong>Nombre: </strong> {name}
        </p>
        <p>
          <strong>Pais: </strong> {coutry}
        </p>
        <p>
          <strong>Correo: </strong> {email}
        </p>
      </div>
    );
  }
}

ItemUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    coutry: PropTypes.string,
    email: PropTypes.string
  })
}

ItemUser.defaultProps = {
  user: {
    name: 'Mi nombre por defecto',
    coutry: 'Mi pais por defecto',
    email: 'Mi email por defecto'
  }
}

export default ItemUser;
