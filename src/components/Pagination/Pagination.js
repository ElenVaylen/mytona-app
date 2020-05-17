import React, {useRef} from 'react'

import './Pagination.scss'

export const Pagination = (props) => {
  const {
    total = 0,
    itemsPerPage = 0,
    currentPage = 1,
    setPage = () => {}
  } = props

  const paginationRef = useRef(null)

  const pagesCount = Math.ceil(total / itemsPerPage)

  const getPagesCount = (pagesCount, currentPage) => {
    let arr = []
    let fromPage = currentPage
    let paginationItems = 6
    let count = paginationItems
    if (pagesCount > paginationItems) {
      if (currentPage <= 2) {
        fromPage = 1
      } else if (currentPage >= pagesCount - 2) {
        fromPage = pagesCount - 4
        count = pagesCount
      } else {
        fromPage = currentPage - 2
        count = fromPage + 5
      }
    }
    for (let i = fromPage; i <= count; i++) {
      arr.push(
        <div key={i} className="pagination__item">
          <button className={`pagination__link${currentPage === i ? ' active' : ''}`} onClick={() => setPage(i)}>{i}</button>
        </div>
      )
    }
    return arr
  }

  if (total === 0) {
    return
  }
  return (
    <div className="pagination d-flex align-items-center justify-content-end" ref={paginationRef}>
      <div className="pagination__item">
        <button className="pagination__link" aria-label="Previous" onClick={() => setPage(1)} disabled={currentPage === 1}>
          <span aria-hidden="true">&laquo;</span>
        </button>
      </div>
      <div className="pagination__item">
        <button className="pagination__link" aria-label="Previous" onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
          <span aria-hidden="true">Previous</span>
        </button>
      </div>
      {getPagesCount(pagesCount, currentPage)}
      <div className="pagination__item">
        <button className="pagination__link" href="#" aria-label="Next" onClick={() => setPage(currentPage + 1)} disabled={currentPage === pagesCount}>
          <span aria-hidden="true">Next</span>
        </button>
      </div>
      <div className="pagination__item">
        <button className="pagination__link" href="#" aria-label="Next" onClick={() => setPage(pagesCount)} disabled={currentPage === pagesCount}>
          <span aria-hidden="true">&raquo;</span>
        </button>
      </div>
    </div>
  )
}