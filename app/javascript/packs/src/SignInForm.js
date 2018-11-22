import React from 'react';

import Button from '@material-ui/core/Button';

// console.log(
//   document.querySelector('meta[name="csrf-param"]').content,
//   document.querySelector('meta[name="csrf-token"]').content
// );

export default class App extends React.Component {

  render() {
    return (
      <div>
        {/*<p>{this.state.data.message} => React => 🌍</p>*/}
        <Button variant="contained" color="secondary">
          Hello World
        </Button>
      </div>
    );
  }

};


