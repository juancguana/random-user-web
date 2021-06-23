import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Link,
  makeStyles,
} from '@material-ui/core';

const useStyle = makeStyles({
  menu: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});

const Header = () => {
  const classes = useStyle();

  return (
    <AppBar position='sticky'>
      <Container maxWidth='lg'>
        <Toolbar className={classes.menu}>
          <IconButton edge='start'>
            <img src='logo512.png' alt='Logo' height='30px' />
          </IconButton>
          <Link href='' color='inherit'>
            Inicio
          </Link>
          <Link href='' color='inherit'>
            Formulario
          </Link>
          <Link href='' color='inherit'>
            Lista
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
