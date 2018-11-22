import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';

import { Link } from "react-router-dom";

import Checkbox from '@material-ui/core/Checkbox';

import MenuItem from '@material-ui/core/MenuItem';

import { Grid } from '@material-ui/core';

import apiUrl from './getApiUrl.js';

// name: "Gardens of Versailles", description: "meh", price: 300, photo: "...", location: "Paris", user_id: 3,

// TODO: make a class component not functional component; insert state inside
// TODO: un-hard-code photo && user ID

// const fakeState = {
//   name: '',
//   description: '',
//   location: '',
//   price: '',
//   user_id: 5
// };

const RegistrationForm = props => {

  const handleSubmit = () => {};
  const reset = () => {};

  const outerProps = props;

  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            name="username"
            label="Username"
          />
        </div>
        <div>
          <TextField
            type='email'
            name="email"
            label="Email"
          />
        </div>
        <div>
          <TextField
            type='password'
            name="password"
            label="Password"
          />
        </div>
        <div style={{padding: '30px 0', display: 'flex', justifyContent: 'space-between'}}>
          <Button style={{width:
            '100%', height: '3.5em'}} variant="contained" color="primary" type='submit'
            onClick={(e) => {
              e.preventDefault();

              const f = document.forms[0];

              fetch(`${apiUrl}/api/v1/gardens`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({
                  garden: {
                    name: f.name.value,
                    description: f.description.value,
                    location: f.location.value,
                    price: +f.price.value,
                    user_id: 5,
                    photo: 'Secret gardens/Kyoto-Gardens.jpg'
                  }
                })
              }).then(res => res.json())
              .then(dat => {
                console.log(dat);
                outerProps.refreshData();
              });

            }}
          >
            Create my account
          </Button>
        </div>
      </form>
    </Grid>
  );
}

export default RegistrationForm;
