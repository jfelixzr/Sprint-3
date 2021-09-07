import React, { useState, useRef, useCallback } from 'react'
import useMovieSearch from './CMovieHome'
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
const Titulo = styled.h1`
  text-align: center;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    #4551fc 100%
  );
  color: white;
  margin: 0;
`;

export default function AppMovie() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    movies,
    hasMore,
    loading,
    error
  } = useMovieSearch(query, pageNumber)

  const observer = useRef()
  const lastMovieElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }
  const handleSearchF = (e) => {
    e.preventDefault();
    
  
}
  return (
    <>
    <form style={{textAlign:"center", color:"white", }} onSubmit={handleSearchF}>
      <input type="text" value={query} onChange={handleSearch} style={{textAlign:"center", fontSize:"20px", marginTop:"15px"    
    }}/><button
    type="submit"
    className="btn btn-block btn-outline-primary" style={{marginBottom:"10px"}}
>
<BsSearch />
</button></form>
      <Titulo>Movies</Titulo>
      {movies.map((movie, index) => {
        if (movies.length === index + 1) {
          return <div ref={lastMovieElementRef} key={movie}>{movie}</div>
        } else {
          return <div key={movie}>{movie}</div>
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
  )
}