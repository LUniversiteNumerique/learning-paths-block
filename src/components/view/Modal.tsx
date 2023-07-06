import * as React from 'react';


const Modal = (): JSX.Element => {
  return (
    <div id="lpb-modal">
      <div id="lpb-modal-content">
        <span id="lpb-modal-close">&times;</span>
        <div id="lpb-modal-content-body">...</div>
      </div>
    </div>
  )
};

export default Modal;