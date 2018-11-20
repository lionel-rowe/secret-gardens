import React from 'react';
import apiUrl from './getApiUrl.js';

import SignInForm from './SignInForm.js';
import Navbar from './components/Navbar.js';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Doges from './Doges.js'

// import blue from '@material-ui/core/colors/blue';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f7d04f',
      main: '#F6C523',
      dark: '#ac8918',
      contrastText: '#000',
    },
    secondary: {
      light: '#70c7d2',
      main: '#4DBAC7',
      dark: '#35828b',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
    // fontSize: 10,
  }
});

export default class App extends React.Component {

  state = {
    data: {
      message: ''
    }
  };

  componentDidMount() {
    fetch(`${apiUrl}/api/v1/gardens.json`)
    .then(res => res.json())
    .then(data => {

      console.log(data)

      this.setState({
        data: data
      });
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Navbar title='TITLE' />

            <Typography variant="h3" gutterBottom>
              hi
            </Typography>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/doges">Doges</Link>
                  </li>
                </ul>
              </nav>
              <Route path="/" exact component={SignInForm} />
              <Route path="/doges" exact component={Doges} />
              <Route path="/users/sign_in" exact component={Doges} />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }

};
