import React from 'react';
import './Modal.scss';
// components
import Subscription from '../subscription/Subscription';

const Modal = () => {
  return (
    <div id="modal" className="modal">
      <div className="modal__content">
        <Subscription /><a href="#section-tours" className="modal__close">&times;</a>
      </div>
    </div>
  )
}

export default Modal;