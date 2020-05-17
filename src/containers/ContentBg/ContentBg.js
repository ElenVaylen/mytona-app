import React from 'react'

import './ContentBg.scss'

export const ContentBg = ({children}) => {
  return (
    <div className="content-bg container">
      <div className="content-bg__wrap">
        {children}
      </div>
    </div>
  )
}