import React, { Component } from 'react';
import {
  ThemeProvider,
} from '@material-ui/core';
import theme from '../themeConfig';
import Home from '../pages/Home';
import Form from '../pages/Form';
import List from '../pages/List';
import Layout from '../layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import User from '../pages/User';
export class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/list" component={List} />
              <Route exact path="/form" component={Form} />
              <Route exact path="/user/:id" component={User} />
            </Switch>
          </Layout>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
