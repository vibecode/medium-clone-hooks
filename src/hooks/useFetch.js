import { useState, useEffect, useCallback } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'

import axios from 'axios'

export default url => {
  const baseUrl = 'https://conduit.productionready.io/api'

  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})
  const [token] = useLocalStorage('token')

  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      return
    }

    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : ''
        }
      }
    }

    async function fetch() {
      try {
        const res = await axios(baseUrl + url, requestOptions)

        setResponse(res.data)
        setIsLoading(false)
      } catch (error) {
        setError(error.response.data)
        setIsLoading(false)
      }
    }

    fetch()
  }, [isLoading, options, url, token])

  return [{ isLoading, response, error }, doFetch]
}
