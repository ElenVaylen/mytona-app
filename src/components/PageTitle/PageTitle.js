import React from 'react'

export const PageTitle = ({title = ''}) => {
  return (
    <h1 className='page-title'>{title}</h1>
  )
}