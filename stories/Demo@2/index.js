import React from 'react';

import Dialog from './../../src/components/Dialog@2/dialog';
import DialogHeader from './../../src/components/Dialog@2/DialogHeader';
import DialogContent from './../../src/components/Dialog@2/DialogContent';
import DialogActions from './../../src/components/Dialog@2/DialogActions';

import './index.css';

export default class Demo extends React.Component {
  state = {
    isDialogOpen: false
  }

  openDialog = () => {
    this.setState({isDialogOpen: true})
  }

  closeDialog = () => {
    this.setState({isDialogOpen: false})
  }

  render () {
    const {isDialogOpen} = this.state;

    return (
      <div className="container">
        <button onClick={this.openDialog}>Click Me</button>
        <Dialog
          open={isDialogOpen}
          onClose={this.closeDialog}
        >
          <DialogHeader>
            <h1>Hello!</h1>
          </DialogHeader>
          <DialogContent>
            <ul>
              <li>01</li>
              <li>02</li>
            </ul>
          </DialogContent>
          <DialogActions>
            <button>Cancel</button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
