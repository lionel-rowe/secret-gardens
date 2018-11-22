import React from 'react';
import Button from '@material-ui/core/Button';

// https://github.com/mui-org/material-ui/blob/ddde3c93235f170d2781749a8907005fc12372eb/docs/src/pages/demos/buttons/RaisedButtons.js#L34-L45

export default class FileUploadButton extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    fileName: ''
  }

  render() {

    return (
      <React.Fragment>
        <input
          accept="image/*"
          style={{display: 'none'}}
          name={this.props.name}
          id={this.props.id}
          type="file"
          onChange={e => {
            this.setState({
              fileName: e.target.files[0].name
            })
          }}
        />
        <label htmlFor={this.props.id}>
          <Button variant="contained" color="secondary" component="span">
            {this.state.fileName || 'Upload'}
          </Button>
        </label>
      </React.Fragment>
    );
  }

}
