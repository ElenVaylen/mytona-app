import React, {useEffect, useState} from 'react'
import {ContentBg} from '../../containers/ContentBg/ContentBg'
import {PageTitle} from '../../components/PageTitle/PageTitle'
import {Loading} from '../../components/Loading/Loading'
import {Error} from '../../components/Error/Error'
import {NewsList} from '../../components/NewsList/NewsList'
import {Pagination} from '../../components/Pagination/Pagination'
import {useDispatch, useSelector} from 'react-redux'
import {getNews} from '../../redux/news/actions'

export const News = () => {
  const itemsPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const { news: { articles, totalResults }, loading, error } = useSelector(state => state.news)

  useEffect(() => {
    dispatch(getNews({currentPage, itemsPage}))
  }, [currentPage])

  const setPage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="news">
      <ContentBg>
        <PageTitle title='News' />
        {loading &&
          <Loading />
        }
        {error &&
          <Error />
        }
        {(!loading && articles) &&
          <>
            <NewsList newsArr={articles}/>
            <Pagination total={totalResults} itemsPerPage={itemsPage} setPage={setPage} currentPage={currentPage}/>
          </>
        }
      </ContentBg>
    </div>
  )
}