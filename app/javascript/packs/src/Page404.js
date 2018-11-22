import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';

export default class Doges extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <p>
          Sorry, that page doesn't exist!
        </p>
        <Button variant="contained" color="primary" component={Link} to="/">
          Home
        </Button>
      </div>
    );
  }
}
