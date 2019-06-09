import React from 'react';

import './index.css';

import {DialogContent, DialogHeader, DialogActions} from './index';

export default class Dialog extends React.Component {
  static defaultProps = {
    open: false
  }

  static resolvedComponentNames = [
    DialogHeader.displayName,
    DialogContent.displayName,
    DialogActions.displayName
  ];

  dialogRef = (node) => {
    this.dialog = node;
  }

  componentDidUpdate(prevProps) {
    if (this.props.open && !prevProps.open) {
      this.dialog.showModal();
    }
    if (!this.props.open && prevProps.open) {
      this.close();
    }
  }

  backdropClick = ({clientX, clientY}) => {
    const {top, bottom, left, right} = this.dialog.getBoundingClientRect();
    const isInDialog = clientY >= top && clientY <= bottom &&
                      clientX >= left && clientX <= right ;
    if (!isInDialog) {
      this.close();
    }
  }

  close = () => {
    const {onClose} = this.props;
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
    this.dialog.close();
  }

  getComponentChildren = () => {
    return React.Children.toArray(this.props.children).reduce(
      (result, element) => {
        if (Dialog.resolvedComponentNames.includes(element.type.name)) {
          result[element.type.name] = element;
        }
        return result;
      },
      {}
    )
  }

  render () {
    const {
      [DialogHeader.displayName]: dialogHeader,
      [DialogContent.displayName]: dialogContent,
      [DialogActions.displayName]: dialogActions,
    } = this.getComponentChildren;

    return (
      <dialog ref={this.dialogRef}
              onClick={this.backdropClick}
              className="dialog"
            >
              <div className="dialog-inside">
                {dialogHeader}
                {dialogContent}
                {dialogActions}
              </div>

      </dialog>
    )
  }
}
