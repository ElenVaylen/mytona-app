import React from 'react'
import classNames from 'classnames'

export const InputField = (props) => {
  const {
    type = 'text',
    htmlFor = '',
    title = '',
    value = '',
    required = false,
    error = false,
    onChange = () => {}
  } = props
  const inputClasses = classNames({
    'form-control': true,
    'is-invalid': error
  })
  return (
    <>
      <label htmlFor={htmlFor}>{title}</label>
      <input type={type} className={inputClasses} id={htmlFor} value={value} onChange={onChange} required={required} name={htmlFor} />
    </>
  )
}