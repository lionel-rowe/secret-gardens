import React from 'react';

import Button from '@material-ui/core/Button';
import Card from './components/Card.js';


console.log(
  document.querySelector('meta[name="csrf-param"]').content,
  document.querySelector('meta[name="csrf-token"]').content
);



export default function Child(props) {
  return (
    <div>
      <Card garden={props.garden}></Card>
      <h3>ID: {props.match.params.id}</h3>
        <Button variant="contained" color='primary'>
          SEE AVAILABILITY
        </Button>

    </div>
  );
}





// class Garden extends React.Component {

//   constructor() {

//   }

//   render() {
//     return (
//       <div>
//         <Button variant="contained" color="secondary">
//           SEE AVAILABILITY
//         </Button>
//       </div>
//     );
//   }

// };


