import React from 'react';

console.log(
  document.querySelector('meta[name="csrf-param"]').content,
  document.querySelector('meta[name="csrf-token"]').content
);

export default class App extends React.Component {

  render() {
    return (
      <div>
        {/*<p>{this.state.data.message} => React => 🌍</p>*/}

      </div>
    );
  }

};


