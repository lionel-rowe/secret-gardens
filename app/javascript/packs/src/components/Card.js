// import React from 'react';

// export default class Doges extends React.Component {
//   render() {
//     return (
//       <div>
//         {JSON.stringify(this.props.garden)}
//       </div>
//     );
//   }
// }


import React from 'react';
// import "./card.css";
import {Image} from 'cloudinary-react';

class Card extends React.Component {

  render () {
    const name = this.props.garden.name;

    const photo = "Secret Garden/pexels-photo-59599.jpg"

    const description = this.props.garden.description;

    return (
      <div className="garden-card">
        <div className="garden-photo"><Image cloudName="Sophiecli" publicId={photo} height="150" crop="scale"/></div>
        <div className="garden-name">{name}</div>
        <div className="garden-description">{description}</div>
      </div>
      );
  }
}

export default Card;
