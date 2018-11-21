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

const MaterialUiForm = props => {

  const handleSubmit = () => {};
  const reset = () => {};

  const outerProps = props;

  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            name="name"
            label="Your garden's name"
          />
        </div>
        <div>
          <TextField
            name="location"
            label="Address"
          />
        </div>
        <div>
          <TextField
            name="description"
            label="Description"
            multiline={true}
          />
        </div>
        <div>
          <TextField
            type='number'
            name="price"
            label="Price (US$)"
          />
        </div>

        <div>
          <FormLabel>Upload a photo</FormLabel>
          {' '}
          <Button
            variant="contained" color="secondary"
          >
            Upload
          </Button>
        </div>

        <div style={{padding: '30px 0', display: 'flex', justifyContent: 'space-between'}}>
          <Button variant="contained" color="primary" type='submit'
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
            Post
          </Button>
          <Button color="default" component={Link} to="/">
            Cancel
          </Button>
        </div>
      </form>
    </Grid>
  );
}

export default MaterialUiForm;
