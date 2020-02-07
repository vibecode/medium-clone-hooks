import React, { useEffect, Fragment } from 'react'
import { stringify } from 'query-string'

import Feed from 'components/Feed'
import useFetch from 'hooks/useFetch'
import Pagination from 'components/Pagination'
import { getPaginator, limit } from 'utils'
import PopularTags from 'components/PopularTags'
import Loading from 'components/Loading'
import ErrorMessage from 'components/ErrorMessage'
import Toggle from 'components/FeedToggle'

const GlobalFeed = ({ location, match }) => {
  const { offset, currentPage } = getPaginator(location.search)
  const stringifiedParams = stringify({
    limit,
    offset
  })
  const apiUrl = `/articles?${stringifiedParams}`
  const currentUrl = match.url
  const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [currentPage, doFetch])

  return (
    <div className="home-page">
      <div className="banner">
        <h1>Medium Clone</h1>
        <p>A place to share knowledge</p>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <Toggle />
            {isLoading && <Loading />}
            {error && <ErrorMessage />}
            {!isLoading && response && (
              <Fragment>
                <Feed articles={response.articles} />
                <Pagination
                  total={response.articlesCount}
                  limit={limit}
                  url={currentUrl}
                  currentPage={currentPage}
                />
              </Fragment>
            )}
          </div>
          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalFeed
