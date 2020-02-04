import React, { useEffect, Fragment } from 'react'

import Feed from 'components/Feed'
import useFetch from 'hooks/useFetch'

const GlobalFeed = () => {
  const apiUrl = '/articles?limit=10&offset=0'
  const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl)
  console.log('res', response, error, isLoading)

  useEffect(() => {
    doFetch()
  }, [doFetch])

  return (
    <div className="home-page">
      <div className="banner">
        <h1>Medium Clone</h1>
        <p>A place to share knowledge</p>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <div>Loading...</div>}
            {error && <div>Some error happened</div>}
            {!isLoading && response && (
              <Fragment>
                <Feed articles={response.articles} />
              </Fragment>
            )}
          </div>
          <div className="col-md-3">Popular tags</div>
        </div>
      </div>
    </div>
  )
}

export default GlobalFeed
