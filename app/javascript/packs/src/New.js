import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';

import { Link } from "react-router-dom";

import Checkbox from '@material-ui/core/Checkbox';

import MenuItem from '@material-ui/core/MenuItem';

import { Grid } from '@material-ui/core';

import apiUrl from './getApiUrl.js';

import FileUploadButton from './components/FileUploadButton.js';

import { withRouter } from 'react-router-dom';

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


// const Button = withRouter(({ history }) => (
//   <button
//     type='button'
//     onClick={() => { history.push('/new-location') }}
//   >
//     Click Me!
//   </button>
// ));

const MaterialUiForm = withRouter(props => {
  const handleSubmit = (e) => {
      e.preventDefault();

      const f = document.querySelector('#newGardenForm');

      const fData = new FormData(f);
      fData.set('garden[user_id]', 5); //TODO: un-hardcode

      console.log(fData);

      fetch(`${apiUrl}/api/v1/gardens`, {
        method: 'POST',
        headers: {
          // "Content-Type": "multipart/form-data"
          token: localStorage.token
        },
        body: fData
      }).then(res => res.json())
      .then(dat => {
        console.log(dat);

        if (dat.errors) {
          alert(dat.errors.join('\n'))
        } else {
          props.refreshData();

          props.history.push(`/gardens/${dat.id}`);
        }
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
          <FileUploadButton name='garden[photo]' id='garden_photo' />
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
});

export default MaterialUiForm;
