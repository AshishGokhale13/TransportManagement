import React from 'react'

function Modal(props) {
  return (
    <div className='modal'>
        <div className='modal-box'>
            {props.children}
        </div>
    </div>
  )
}

export default Modal