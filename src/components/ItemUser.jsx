import React from 'react';
import './styles/ItemUser.css';
import PropTypes from 'prop-types'
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  cardUser: {
    maxWidth: 500,
    margin: '8px auto',
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.primary.light

  },
  cardMedia: {
    flex: 1,
  },
  cardContent: {
    flex: 2
  }
}))


const ItemUser = (props) => {
  const { name, country, email, telefono } = props.user;
  const classes = useStyle();
  return (
    <Card className={classes.cardUser}>
        <CardMedia 
          className={classes.cardMedia}
          component="img"
          image="/logo192.png"
          title="Imagen de usuario"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="body1">
            <strong>Nombre: </strong> {name}
          </Typography>
          <Typography variant="body1">
            <strong>Pais: </strong> {country}
          </Typography>
          <Typography variant="body1">
            <strong>Correo: </strong> {email}
          </Typography>
          { telefono &&
          <Typography variant="body1">
            <strong>Telefono: </strong> {telefono}
          </Typography>
          }
        </CardContent> 
      </Card>
  )
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
