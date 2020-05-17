import React from 'react'

import './Error.scss'

export const Error = (props) => {
  const {msg = 'Some error happened'
  } = props
  return (
    <div className='error d-flex justify-content-center mt-3 mb-3'>
      <div className='error__message'>{msg}</div>
    </div>
  )
}