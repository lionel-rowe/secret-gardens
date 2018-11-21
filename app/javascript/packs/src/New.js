import React from 'react';

import Button from '@material-ui/core/Button';

console.log(
  document.querySelector('meta[name="csrf-param"]').content,
  document.querySelector('meta[name="csrf-token"]').content
);

export default class New extends React.Component {

  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          POST
        </Button>
      </div>
    );
  }

};


