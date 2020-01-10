import { useState, useEffect } from 'react'
import axios from 'axios'

export default url => {
  const baseUrl = 'https://conduit.productionready.io/api'
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})

  const doFetch = (options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }

  useEffect(() => {
    if (!isLoading) {
      return
    }

    async function fetch() {
      try {
        const res = axios(baseUrl + url, options)

        setResponse(res.data)
        setIsLoading(false)
      } catch (error) {
        setError(error.response.data)
        setIsLoading(false)
      }
    }

    fetch()
  }, [isLoading, options, url])

  return [{ isLoading, response, error }, doFetch]
}
