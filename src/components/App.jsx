import React, { Component } from 'react'
import Title from './Title'
import ItemUser from './ItemUser'
import UserForm from './UserForm';
import userList from '../data'
import { Box, Button, ButtonGroup, Switch, ThemeProvider } from '@material-ui/core';
import theme from '../themeConfig'
import Header from './Header'
import Footer from './Footer';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      country: '',
      email: '',
      telefono: ''
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
      <ThemeProvider theme={theme}>
        <Header />
        <ItemUser user={this.state} />
        <UserForm onChange={this.handleChange} user={this.state}/>
        {/* <Box align="center">
          <Button color="secondary" variant="contained" size="large">Cargar mas</Button>
        </Box> */}
        <Footer />

    </ThemeProvider>
    )
  }
}

export default App
