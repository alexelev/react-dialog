import React from 'react';

import './index.css';

export default class Dialog extends React.Component {
  static defaultProps = {
    isHeaderInBottom: false,
    isActionsInTop: false,
  }

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

  render () {
    const {
      header,
      children,
      actionButtons,
      isHeaderInBottom,
      isActionsInTop
    } = this.props;

    return (
      <dialog ref={this.dialogRef}
              onClick={this.backdropClick}
              className="dialog"
            >
              <div className="dialog-inside">
                <section
                  className={`dialog-header ${isHeaderInBottom ? 'bottom' : ''}`}
                >
                  {header}
                </section>
                <section className="dialog-content">
                  {children}
                </section>
                <section
                  className={`dialog-actions ${isActionsInTop ? 'top' : ''}`}
                >
                  {actionButtons.map(btn => <button>{btn}</button>)}
                </section>
              </div>

      </dialog>
    )
  }
}
