import React from 'react';

import SignInForm from './SignInForm.js';
import Navbar from './components/Navbar.js';
import BottomNav from './components/BottomNav.js';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Gardens from './Gardens.js';
import Garden from './Garden.js';
import Doges from './Doges.js';
import New from './New.js';

import apiUrl from './getApiUrl.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#70c7d2',
      main: '#4DBAC7',
      dark: '#35828b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f7d04f',
      main: '#F6C523',
      dark: '#ac8918',
      contrastText: '#000',
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
      gardens: []
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
            <Navbar title='Gardens' />
            <Grid container style={{ padding: '76px 20px' }} >
              <Route path="/" exact component={() => <Gardens data={this.state.data} />} />
              <Route path="/doges" exact component={Doges} />
              <Route path="/users/sign_in" exact component={SignInForm} />

              <Switch>
                <Route path="/gardens/new" exact component={New} />
                <Route
                  path='/gardens/:id'
                  render={(props) => {
                    return (
                      <Garden {...props} garden={this.state.data.gardens.find(g => g.id === +props.match.params.id)} />
                    );
                  }}
                />
              </Switch>
            </Grid>
            <BottomNav />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }

};
