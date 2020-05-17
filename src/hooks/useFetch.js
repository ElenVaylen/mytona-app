import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'

export default url => {
  const baseUrl = ''
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})


  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    const requestOptions = {
      ...options
    }
    if (!isLoading) {
      return
    }

    axios(baseUrl + url, requestOptions)
      .then(res => {
        if (res.status === 200) {
          setResponse(res.data)
          setIsLoading(false)
        }
      })
      .catch(error => {
        setError(error.response.data)
        setIsLoading(false)
      })
  }, [isLoading, options, url])

  return [{isLoading, response, error}, doFetch]
}
