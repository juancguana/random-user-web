import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Box,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyle = makeStyles((theme) => ({
  cardUser: {
    maxWidth: 500,
    margin: '8px auto',
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.primary.light,
  },
  cardMedia: {
    flex: 1,
  },
  cardContent: {
    flex: 2,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const ItemUser = (props) => {
  const { name, country, email, telefono, id } = props.user;
  const classes = useStyle();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className={classes.cardUser}>
      <CardMedia
        className={classes.cardMedia}
        component='img'
        image='/logo192.png'
        title='Imagen de usuario'
      />
      <CardContent className={classes.cardContent}>
        <Typography variant='body1'>
          <strong>Nombre: </strong> {name}
        </Typography>
        <Typography variant='body1'>
          <strong>Pais: </strong> {country}
        </Typography>
        <Typography variant='body1'>
          <strong>Correo: </strong> {email}
        </Typography>
        {telefono && (
          <Typography variant='body1'>
            <strong>Telefono: </strong> {telefono}
          </Typography>
        )}
        <br />
        <Box className={classes.actions}>
          {props.isEdit && (
            <Button
              component={Link}
              to={`/edit/${id}`}
              variant='contained'
              color='secondary'
            >
              Editar
            </Button>
          )}
          {props.isDelete && (
            <Button
              variant='contained'
              color='secondary'
              onClick={handleDelete}
            >
              Eliminar
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

ItemUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string,
  }),
};

ItemUser.defaultProps = {
  user: {
    name: 'Mi nombre por defecto',
    country: 'Mi pais por defecto',
    email: 'Mi email por defecto',
  },
};

export default ItemUser;
