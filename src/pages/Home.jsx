import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import ItemUser from '../components/ItemUser'
import Title from '../components/Title'
import Count from '../components/Count'


const data = {
  name: 'Juan Guana',
  country: 'Ecuador',
  email: 'juan@prueba.com',
  telefono: '099999999'
}

const useStyles = makeStyles({

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: '24px 8px',
    height: '70vh'
  }

})

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
        <Count />
        <Title text="BIENVENIDO A USER RANDOM" />
        <ItemUser user={data}/>
        <Typography variant="body2" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo blanditiis, eaque ratione amet saepe voluptatum fugit in consectetur consequuntur nisi quod eius possimus libero cum dicta modi hic magni fugiat!</Typography>
    </Box>
  )
}

export default Home
