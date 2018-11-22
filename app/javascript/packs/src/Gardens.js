
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import GardenCard from './components/GardenCard.js';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
});

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {props.data.gardens.map(garden => (
              <Grid item key={garden.id} sm={6} md={4} lg={3}>
              <GardenCard garden={garden} classes={classes} />
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);

// import React from 'react';
// import Card from './components/Card.js';
// <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// export default class Gardens extends React.Component {

//   render() {
//     return (
//       <div className="cards">
//         {this.props.data.gardens.map((garden, idx) => {
//           return (
//             <Link to={`gardens/${garden.id}`} key={idx} className='card'>
//               <Card garden={garden}></Card>
//             </Link>
//           );
//         })}
//       </div>
//     );
//   }
// }

