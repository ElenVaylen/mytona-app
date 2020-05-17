import React from 'react'
import dateformat from 'dateformat'
import './NewsList.scss'

export const NewsList = (props) => {
  const {
    newsArr = []
  } = props
  return (
    <div className='news-list'>
      {newsArr.map((item, index) => {
        return (
          <div className='news-list__item' key={index}>
            <div className="news-list__item-wrap row">
              <div className="news-list__item-left col-auto">
                <div className="news-list__item-img">
                  <img src={item.urlToImage} alt=""/>
                </div>
              </div>
              <div className="news-list__item-right col">
                <p className='news-list__item-date'>{dateformat(item.publishedAt, 'dddd, mmmm dS, yyyy')}</p>
                <h4 className="news-list__item-title">{item.title}</h4>
                <p className='news-list__item-desc'>{item.description}</p>
                <p className='news-list__item-source'>Source: <a href={item.url} target='_blank' rel="noopener noreferrer">{item.source.name}</a></p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}