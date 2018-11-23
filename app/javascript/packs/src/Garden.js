import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NewBooking from './NewBooking.js';
import { Link } from "react-router-dom";
import GardenCard from './components/GardenCard.js';
import cloudinarify from './utils/cloudinarify.js';
import defaultImg from './utils/defaultImg.js';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Garden(props) {
  const { classes } = props;

  const garden = props.garden || { name: '', photo: {url: null}, description: '', external_pic: null };

  const { name, photo, description, external_pic } = garden;
  const bgImg = external_pic || photo.url || defaultImg;

  return (
    <div>
      <div style={{
        backgroundImage: `url("${bgImg}")`,
        width: '100vw',
        height: 300,
        marginTop: -20,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div style={{textAlign: 'center'}}>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
        <Link to='/newbooking' className='unstyled-link'>
        <Button>Book Now</Button></Link>
      </div>
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


