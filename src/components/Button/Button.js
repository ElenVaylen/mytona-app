import React from 'react'
import classNames from 'classnames'

export const Button = (props) => {
  const {
    title = '',
    type = 'button',
    disabled = false,
    typeClass = 'primary',
    onClick = () => {},
    onSubmit = () => {}
  } = props
  let buttonClasses = classNames({
    btn: true,
    [`btn-${typeClass}`]: typeClass
  })
  return (
    <button className={buttonClasses} type={type} disabled={disabled} onClick={onClick} onSubmit={onSubmit}>{title}</button>
  )
}
