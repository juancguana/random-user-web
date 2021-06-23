import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Link,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    padding: '24px 0',
    background: theme.palette.primary.main,
    color: 'white',
  },
}));

const Footer = () => {

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth='md'>
        <Grid container align='center'>
          <Grid item xs={12} sm={4}>
            <Typography variant='h5'>
              <strong>Politicas del sitio</strong>
            </Typography>
            <br />
            <Link href='#' color='inherit'>
              <Typography>Politicas de privacidad</Typography>
            </Link>
            <Link href='#' color='inherit'>
              <Typography>Terminos y condiciones</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h5'>
              <strong>Servicios</strong>
            </Typography>
            <br />
            <Link href='#' color='inherit'>
              <Typography>Soporte</Typography>
            </Link>
            <Link href='#' color='inherit'>
              <Typography>Preguntas frecuentes</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h5'>
              <strong>Contactanos</strong>
            </Typography>
            <br />
            <Link href='#' color='inherit'>
              <Typography>0999999999</Typography>
            </Link>
            <Link href='#' color='inherit'>
              <Typography>email@prueba.com</Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
