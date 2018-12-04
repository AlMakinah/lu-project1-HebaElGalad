import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const modalContainer = document.createElement("div");
modalContainer.id = "card-details";
document.body.appendChild(modalContainer);

class Modal extends Component {
  static propTypes = {
    closeButton: PropTypes.bool,
    overlayCloses: PropTypes.bool,
    onClose: PropTypes.func
  };

  static defaultProps = {
    closeButton: true,
    overlayCloses: true,
    onClose: () => null
  };

  closeModal = () => {
    this.props.onClose();
  };

  render() {
    const { closeButton, overlayCloses } = this.props;
    // debugger;

    return ReactDOM.createPortal(
      <>
        <div
          className="card-details"
          onClick={overlayCloses ? this.closeModal : () => null}>
          {this.props.children}
          {closeButton && (
            <button
              className="button button--outline close-modal"
              onClick={this.closeModal}>
              Close
            </button>
          )}
        </div>
      </>,
      modalContainer
    );
  }
}

export default Modal;

export class ModalParent extends Component {
  state = {
    showModal: false
  };
  render() {
    const { showModal } = this.state;

    return <></>;
  }
}
