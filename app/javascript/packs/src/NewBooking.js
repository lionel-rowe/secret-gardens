import React from 'react';
import Calendar from 'react-calendar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

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
        {/*<Link to='/newbooking' className='unstyled-link'>*/}
          <Button>SEND REQUEST</Button>
        {/*</Link>*/}
      </div>
    );
  }
}

export default NewBooking;
