import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NewBooking from './NewBooking.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

console.log(
  document.querySelector('meta[name="csrf-param"]').content,
  document.querySelector('meta[name="csrf-token"]').content
);

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Garden(props) {
  const { classes } = props;
  const garden = props.garden;
  const name = props.garden.name;
  const photo = props.garden.photo;
  const description = props.garden.description;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
        <Link to={NewBooking}>
        <Button>Book Now</Button></Link>
      </Paper>
    </div>
  );
}

Garden.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Garden);


// LIONEL'S CODE - NOT WORKING???? STARTED NEW CODE - "SOPHIE'S CODE"

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import GardenCard from './components/GardenCard.js';
// export default function Child(props) {
//   return (
//     <div>
//       <GardenCard garden={props.garden}></GardenCard>
//       <h3>ID: {props.match.params.id}</h3>
//         <Button variant="contained" color='primary'>
//           SEE AVAILABILITY
//         </Button>
//     </div>
//   );
// }

// class Garden extends React.Component {


// OLD CODE
//   constructor() {
//   }
//   render() {
//     return (
//       <div>
//         <Button variant="contained" color="secondary">
//           SEE AVAILABILITY
//         </Button>
//       </div>
//     );
//   }
// };


