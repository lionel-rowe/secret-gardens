import React from 'react';
// import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// MATERIAL UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import defaultImg from '../utils/defaultImg.js';
import cloudinarify from '../utils/cloudinarify.js';


const styles = theme => ({
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    // maxHeight: '150px',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  cardContent: {
    flexGrow: 1,
  },
  link: {
    height: '100%',
    width: '100%',
  }
});

class GardenCard extends React.Component {

  render () {
    const garden = this.props.garden;
    const name = this.props.garden.name;
    const photo = this.props.garden.photo;
    const description = this.props.garden.description;
    const { classes } = this.props;

    const bgImg = photo ? cloudinarify(photo) : defaultImg;

    return (
      <Link className={classes.cardMedia} to={`gardens/${garden.id}`} key={garden.id} className='unstyled-link' variant="contained" color="primary">
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={bgImg}
            title={name}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>
              {description}
            </Typography>
          </CardContent>
        </Card>
        </Link>
      );



    // return (
    //   <div className="garden-card">
    //     <div className="garden-photo"><Image cloudName="drgdpdviq" publicId={photo}>
    //     <Transformation radius="10" width="250" height="150" crop="scale" />
    //     </Image></div>
    //     <div className="garden-name">{name}</div>
    //     <div className="garden-description">{description}</div>
    //   </div>
    //   );
  }
}

export default withStyles(styles)(GardenCard);


