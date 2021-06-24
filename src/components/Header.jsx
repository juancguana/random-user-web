import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Link,
  makeStyles,
} from '@material-ui/core';
import { Link as RouterLink} from 'react-router-dom'
import Logo from '../image/logo512.png'

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
            <img src={Logo} alt='Logo' height='30px' />
          </IconButton>
          <Link component={RouterLink} to="/" color='inherit'>
            Inicio
          </Link>

          <Link component={RouterLink} to="/form" color='inherit'>
            Formulario
          </Link>

          <Link component={RouterLink} to="/list" color='inherit'>
            Lista
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
