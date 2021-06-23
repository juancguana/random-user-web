import React from 'react'
import { Box, Typography, Container, makeStyles } from '@material-ui/core'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ItemUser from '../components/ItemUser'
import Title from '../components/Title'
import { height } from 'dom-helpers'


const data = {
  name: 'Juan Guana',
  country: 'Ecuador',
  email: 'juan@prueba.com',
  telefono: '099999999'
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: '24px 8px',
    height: '100%'
  }

})

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Title text="BIENVENIDO A USER RANDOM" />
        <ItemUser user={data}/>
        <Typography variant="body2" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo blanditiis, eaque ratione amet saepe voluptatum fugit in consectetur consequuntur nisi quod eius possimus libero cum dicta modi hic magni fugiat!</Typography>
      </Container>
      <Footer />
    </Box>
  )
}

export default Home
