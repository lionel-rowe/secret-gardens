import React from 'react';

export default class App extends React.Component {

  state = {
    data: {
      message: ''
    }
  };

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/gardens.json')
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
      <p>{this.state.data.message} => React => 🌍</p>
    );
  }

};
