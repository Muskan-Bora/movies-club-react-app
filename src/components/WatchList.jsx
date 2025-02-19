import React, { useEffect, useState } from 'react';

import genreids from '../Utility/Genre'

function WatchList({watchlist , setWatchlist, handleRemoveFromWatchlist}) {

  const [search, setSearch] = useState('')
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre, setCurrGenre] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }

  let handleFilter = (genre) => {
    setCurrGenre(genre)
  }

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })

    setWatchlist([...sortedIncreasing])
  }

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })

    setWatchlist([...sortedDecreasing])
  }

  useEffect(() => {
    let temp = watchlist.map((movieObj)=> {
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp)
  } , [watchlist])

  return (
    <>

      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre)=> {
          return <div onClick={()=> handleFilter(genre)} className={currGenre==genre? 'flex justify-center p-4 rounded-lg font-bold bg-cyan-950 text-white hover:bg-sky-900 hover:text-zinc-50 mx-3': 'flex justify-center p-4 rounded-lg font-bold bg-cyan-600 text-white hover:bg-sky-900 hover:text-zinc-50 mx-3'}>{genre}</div>
        })}
      </div>

      <div className='flex justify-center border px-2 w-[50rem] ml-20 p-4 ml-96 rounded-3xl bg-indigo-200'>
        <div className='text-bold text-5xl px-3 justify-center flex pl-1'>
          <i class="fa-brands fa-searchengin"></i>
        </div>
        <input onChange={handleSearch} value={search} className='h-[3rem] w-[40rem] rounded-lg outline-none bg-cyan-950 text-white p-3' type='text' placeholder='Search Your Movies...'/>
      </div>

      <div className='border border-blue-400 m-8 overflow-hidden rounded-lg'>
        <table className='w-full text-cyan-950 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th className='justify-center'>Name of the Movie</th>
              <th className='flex justify-center'>
                <div onClick={sortIncreasing} className='p-2'><i class="fa-solid fa-circle-up"></i></div>
                <div className='p-2'>Ratings</div>
                <div onClick={sortDecreasing} className='p-2'><i class="fa-solid fa-circle-down"></i></div>
              </th>
              <th className='justify-center'>Popularity</th>
              <th className='justify-center'>Genre</th>
            </tr>
          </thead>

          <tbody>

            {watchlist.filter((movieObj)=> {
              if (currGenre=='All Genres'){
                return true
              }else {
                return genreids[movieObj.genre_ids[0]]==currGenre;
              }
            }).filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj)=>{
              return <tr className='border-b-4'>
              <td className='flex items-center px-4 py-4'>
                <img className='h-[8rem] w-[10rem] rounded-lg' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} />
                <div className='mx-4'>{movieObj.title}</div>
              </td>

              <td>
                {movieObj.vote_average}
              </td>

              <td>
                {movieObj.popularity}
              </td>

              <td>
                {genreids[movieObj.genre_ids[0]]}
              </td>

              <td onClick={()=> handleRemoveFromWatchlist(movieObj)} className='px-3'>
                <div className='border border bg-red-600 text-white font-bold p-1 rounded-lg hover:bg-gray-50 hover:text-red-500'><i class="fa-solid fa-trash"></i> Delete</div>
              </td>
            </tr>
            })}
            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
