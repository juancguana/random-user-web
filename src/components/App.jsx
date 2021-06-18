import React, { Component } from 'react'
import Title from './Title'
import ItemUser from './ItemUser'
import UserForm from './UserForm';
import userList from '../data'
import { Box, Button, ButtonGroup, Switch } from '@material-ui/core';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: userList
    }
  }

  handleChange = ( e ) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    console.log(this.state);

    return (
      <>
      {/* <Title text="Lista de usuarios"/>
      {
        this.state.users.map((item, index)=>{
          return (
            <ItemUser key={index} user={item} /> 
          )
        })
      } */}
      <UserForm onChange={this.handleChange} user={this.state}/>
      {/* <Box align="center">
        <Button color="secondary" variant="contained" size="large">Cargar mas</Button>
      </Box> */}

    </>
    )
  }
}

export default App
