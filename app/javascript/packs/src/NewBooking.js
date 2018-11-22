import React from 'react';
import Calendar from 'react-calendar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NewBooking extends React.Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
        <Button>SEND REQUEST</Button>
      </div>
    );
  }
}

export default NewBooking;
