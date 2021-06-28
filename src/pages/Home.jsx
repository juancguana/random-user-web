import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import UserList from '../components/UserList'
import Title from '../components/Title'

const useStyles = makeStyles({

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
    <Box className={classes.container}>
        <Title text="BIENVENIDO A USER RANDOM" />
        <UserList />
        <Typography variant="body2" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo blanditiis, eaque ratione amet saepe voluptatum fugit in consectetur consequuntur nisi quod eius possimus libero cum dicta modi hic magni fugiat!</Typography>
    </Box>
  )
}

export default Home
