import React from 'react';
// React files
import BookingCard from './components/BookingCard.js';
import CenteredTabs from './components/CenteredTabs.js';
// MATERIAL UI FILES
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import apiUrl from './getApiUrl.js';

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


class Bookings extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      bookings: []
    }
  }

  refreshData = () => {
    fetch(`${apiUrl}/api/v1/my_bookings.json`, {
      method: 'GET',
      headers: {
        // "Content-Type": "multipart/form-data"
        token: localStorage.token
    }})
    .then(res => res.json())
    .then(data => {

      console.log(data)

      this.setState({
        bookings: data.bookings
      });
    });
  }

  componentDidMount() {
    this.refreshData();
  }

  render () {
    const { classes } = this.props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
      <div><CenteredTabs /></div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {this.state.bookings.map(booking => (
              <Grid item key={booking.id} sm={6} md={4} lg={3}>
              <BookingCard booking={booking} classes={classes} />
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
    );
  }
}

Bookings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bookings);

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

// // TEST BOOKINGS
// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
// import BookingCard from './components/BookingCard.js';
// import CenteredTabs from './components/CenteredTabs.js';

// const styles = theme => ({
//   layout: {
//     width: 'auto',
//     marginLeft: theme.spacing.unit * 3,
//     marginRight: theme.spacing.unit * 3,
//     [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
//       width: 1100,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   cardGrid: {
//     padding: `${theme.spacing.unit * 8}px 0`,
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
// });

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// function Bookings(props) {
//   const { classes } = props;

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main>
//       <div><CenteredTabs /></div>
//       <div className={classNames(classes.layout, classes.cardGrid)}>
//           <Grid container spacing={40}>
//             {cards.map(card => (
//               <Grid item key={card} sm={6} md={4} lg={3}>
//                 <Card className={classes.card}>
//                   <CardMedia
//                     className={classes.cardMedia}
//                     image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
//                     title="Image title"
//                   />
//                   <CardContent className={classes.cardContent}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the content.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </div>
//       </main>
//     </React.Fragment>
//   );
// }

// Bookings.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Bookings);
