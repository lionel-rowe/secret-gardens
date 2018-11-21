import React from 'react';
// import "./card.css";
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
// import './card.css';

class Card extends React.Component {

  render () {
    const name = this.props.garden.name;

    const photo = this.props.garden.photo;

    const description = this.props.garden.description;

    return (
      <div className="garden-card">
        <div className="garden-photo"><Image cloudName="drgdpdviq" publicId={photo}>
        <Transformation radius="10" width="250" height="150" crop="scale" />
        </Image></div>
        <div className="garden-name">{name}</div>
        <div className="garden-description">{description}</div>
      </div>
      );
  }
}

export default Card;
