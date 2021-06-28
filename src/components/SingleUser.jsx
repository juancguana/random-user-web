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

const SingleUser = ({ picture, name, location, email, phone }) => {
  const classes = useStyle();
  return (
    <Card className={classes.cardUser}>
      <CardMedia
        className={classes.cardMedia}
        component='img'
        image={picture.large}
        title='Imagen de usuario'
      />
      <CardContent className={classes.cardContent}>
        <Typography variant='body1'>
          <strong>Nombre: </strong> {`${name.title} ${name.first} ${name.last}`}
        </Typography>
        <Typography variant='body1'>
          <strong>Pais: </strong> {location.country}
        </Typography>
        <Typography variant='body1'>
          <strong>Correo: </strong> {email}
        </Typography>
        <Typography variant='body1'>
          <strong>Telefono: </strong> {phone}
        </Typography>
      </CardContent>
    </Card>
  );
};

SingleUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string,
  }),
};

SingleUser.defaultProps = {
  user: {
    name: 'Mi nombre por defecto',
    country: 'Mi pais por defecto',
    email: 'Mi email por defecto',
  },
};

export default SingleUser;
