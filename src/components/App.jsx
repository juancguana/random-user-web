import React, { Component } from 'react';
import {
  ThemeProvider,
} from '@material-ui/core';
import theme from '../themeConfig';
import Home from '../pages/Home';
import Form from '../pages/Form';
import List from '../pages/List';
import Layout from '../layout/Layout';
export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <List />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
