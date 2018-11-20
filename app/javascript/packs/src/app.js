import React from 'react';
import apiUrl from './getApiUrl.js';

import SignInForm from './SignInForm.js';

// ./app.js

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
      <div>
        {/*<p>{this.state.data.message} => React => 🌍</p>*/}

      </div>
    );
  }

};
