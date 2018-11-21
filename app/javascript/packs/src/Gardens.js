
import React from 'react';

import Card from './components/Card.js';
// <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Gardens extends React.Component {

  render() {
    return (
      <div className="cards">
        {this.props.data.gardens.map((garden, idx) => {
          return (
            <Link to={`gardens/${garden.id}`} key={idx} className='card'>
              <Card garden={garden}></Card>
            </Link>
          );
        })}
      </div>
    );
  }
}
