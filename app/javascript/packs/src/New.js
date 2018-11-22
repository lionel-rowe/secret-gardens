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

const csrfParam = document.querySelector('meta[name="csrf-param"]').content;
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;


const MaterialUiForm = props => {

  const outerProps = props;

  const handleSubmit = (e) => {
      e.preventDefault();

      const f = document.querySelector('#newGardenForm');

      const fData = new FormData(f);
      fData.set('garden[user_id]', 5); //TODO: un-hardcode

      console.log(fData);

      fetch(`${apiUrl}/api/v1/gardens`, {
        method: 'POST',
        headers: {
          // "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "multipart/form-data"
        },
        // body: JSON.stringify({
        //   garden: {
        //     name: f.name.value,
        //     description: f.description.value,
        //     location: f.location.value,
        //     price: +f.price.value,
        //     user_id: 5,
        //     photo: 'Secret gardens/Kyoto-Gardens.jpg'
        //   }
        // })

        body: fData
      }).then(res => res.text())
      .then(dat => {
        console.log(dat);
        props.refreshData();
      });

    };

  const reset = () => {};

  return (
    <Grid>
      <form id='newGardenForm' onSubmit={handleSubmit}>

      <input type="hidden" name={csrfParam} value={csrfToken} />
      <input name="utf8" type="hidden" value="✓" />

        <div>
          <TextField
            name="garden[name]"
            label="Your garden's name"
          />
        </div>
        <div>
          <TextField
            name="garden[location]"
            label="Address"
          />
        </div>
        <div>
          <TextField
            name="garden[description]"
            label="Description"
            multiline={true}
          />
        </div>
        <div>
          <TextField
            type='number'
            name="garden[price]"
            label="Price/day (US$)"
          />
        </div>

        <div>
          <FormLabel>Upload a photo</FormLabel>
          {' '}

            <Button
              variant="contained" color="secondary"
            > <input type='file' name='garden[photo]' />
              Upload
            </Button>
        </div>

        <div style={{padding: '30px 0', display: 'flex', justifyContent: 'space-between'}}>
          <Button variant="contained" color="primary" type='submit'>
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
