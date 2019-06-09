import React from 'react';
import Dialog, {
  DialogHeader, 
  DialogContent, 
  DialogActions
} from './../../src/components/Dialog@2';

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
          header="Some header"
          actionButtons={['Close']}
          open={isDialogOpen}
          onClose={this.closeDialog}
          isActionsInTop={true}
          isHeaderInBottom={true}
        >
          Some content
        </Dialog>
      </div>
    );
  }
}
