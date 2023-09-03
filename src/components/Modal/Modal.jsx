import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal_styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onModalClick();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  onBackDropClose = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onModalClick();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onBackDropClose}>
        <ModalWindow>
          {this.props.children} 
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
