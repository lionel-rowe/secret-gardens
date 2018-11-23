import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Splash(props) {
  const { classes } = props;


  return (
    <Grid>
    <div>
      <div style={{
        backgroundImage: 'linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,149,135,0.6) 50%), url("https://images.pexels.com/photos/59599/pexels-photo-59599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        width: '100vw',
        height: '100vh',
        marginTop: -20,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} >
      <div >
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', alignItems: 'center', paddingTop: '170px'}}>
        <img src="https://res.cloudinary.com/drgdpdviq/image/upload/c_scale,w_149/v1542959746/Secret%20gardens/lotuslogo.png" />
        <Typography variant="h4" component="h1" style={{color: '#FFF'}} >
          Secret Gardens
        </Typography>
        <Typography component="p" style={{color: '#FFF', paddingBottom: '120px'}}>
          Take a break nextdoor
        </Typography>
        <div style={{padding: '30px 0', justifyContent: 'space-between'}}>
          <Link to='/' className='unstyled-link'>
          <Button variant="contained" style={{backgroundColor:'#F6C523', color: '#FFF'}} type='submit'>Sign up</Button>
          </Link>
       </div>
      </div>
      </div>
    </div>
    </div>
    </Grid>
  );
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Splash);
