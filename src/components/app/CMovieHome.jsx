import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from "react-bootstrap";


export default function useMovieSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setMovies([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'https://sprint3-movies.herokuapp.com/movies',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setMovies(prevMovies => {
        return [...new Set([...prevMovies, ...res.data.map(b =>  <Card className="cardMovie">
        <Card.Img className="cardImg" variant="top" src={b.image} />
        <Card.Body>
          <Card.Title>{b.fullTitle}</Card.Title>
          <Card.Text>{b.crew}({b.year})</Card.Text>
         
        </Card.Body>
      </Card>)])]
      })
      setHasMore(res.data.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, movies, hasMore }
}