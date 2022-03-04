import { useState, useEffect, useRef } from 'react'

export default function useFetch(url) {
  const isCurrent = useRef(true)
  const [response, setResponse] = useState(null)

  useEffect(() => {
    return () => {
      isCurrent.current = false
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const json = await res.json()
      setResponse(json)
    }

    fetchData()
  }, [url])

  return response
}
