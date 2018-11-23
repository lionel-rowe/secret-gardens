import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';

import { withRouter, Link } from "react-router-dom";

import Checkbox from '@material-ui/core/Checkbox';

import MenuItem from '@material-ui/core/MenuItem';

import { Grid } from '@material-ui/core';

import apiUrl from './getApiUrl.js';

const csrfParam = document.querySelector('meta[name="csrf-param"]').content;
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

const SignInForm = withRouter(props => {

  // props.history.push('/');

  const handleSubmit = () => {};
  const reset = () => {};

  return (
    <Grid>
      <form id='sign-in-form' onSubmit={handleSubmit}>

        <input type="hidden" name={csrfParam} value={csrfToken} />
        <input name="utf8" type="hidden" value="✓" />

        <div>
          <TextField
            type='email'
            name="email"
            label="Email"
            value='bojack@ilt.com' //TODO: don't hardcode
          />
        </div>
        <div>
          <TextField
            type='password'
            name="password"
            label="Password"
            value='123123' //TODO: don't hardcode
          />
        </div>
        <div style={{padding: '30px 0', display: 'flex', justifyContent: 'space-between'}}>
          <Button style={{width:
            '100%', height: '3.5em'}} variant="contained" color="secondary" type='submit'
            onClick={(e) => {
              e.preventDefault();

              const f = document.querySelector('#sign-in-form');
              const fData = new FormData(f);

              fetch(`${apiUrl}/api/v1/login`, {
                method: 'POST',
                headers: {
                  // "Content-Type": "multipart/form-data"
                },
                body: fData
              }).then(res => res.json())
              .then(dat => {
                console.log(dat);

                if (dat.error) {
                  alert(dat.error)
                } else {

                  localStorage.setItem('token', dat.token); //TODO: don't use localstorage
                  localStorage.setItem('email', dat.email); //TODO: don't use localstorage
                  localStorage.setItem('uid', dat.uid); //TODO: don't use localstorage
                  // props.refreshData();

                  // history.push(`/gardens/${dat.id}`);
                  props.refreshData(); //will also redir to index
                  // setTimeout(() => {
                  // props.history.push('/');
                  // }, 1000);
                }
              });

            }}
          >
            Let’s Go!
          </Button>
        </div>
      </form>
    </Grid>
  );
});

export default SignInForm;
