import React, { useEffect } from 'react'
import MovieCard from './MovieCard'
import Pagnination from './Pagnination'
import axios from 'axios'
import { useState } from 'react'

function Movies({handleAddtoWatchList, handleRemoveFromWatchlist, watchlist}) {

  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Load API key from .env file

  const handlePREV = () => {
    if(pageNo==1){
      setPageNo(1)
    }
    else{
      setPageNo(pageNo-1)
    }
  }

  const handleNEXT = () => {
    setPageNo(pageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
      console.log(res.data.results)
    })
  } , [pageNo])

  // const fetchMovies = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNo}`
  //     );
  //     setMovies(response.data.results);
  //     console.log(response.data.results);
  //   } catch (error) {
  //     console.error("Error fetching movies:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, [pageNo]);

  return (
    <div className='p-5'>
      <div className='text-3xl m-5 font-bold text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-8'>
        
        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist} />
        })}

      </div>

      <Pagnination pageNo={pageNo} handleNEXT={handleNEXT} handlePREV={handlePREV} />

    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=8f185c0ed956c71a82121dd3a5226ef8&language=en-US&page=1