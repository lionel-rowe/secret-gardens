import React from 'react';
import apiUrl from './getApiUrl.js';
import Card from './components/card';

export default class App extends React.Component {

  state = {
    data: {
      gardens: [
        {
          name: 'Balcony',
          price: 150,
        }
      ]
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
      <Card garden = {this.state.data.gardens[0]}/>
    );
  }
};
