import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  let [watchlist, setWatchlist] = useState([])

  let handleAddtoWatchlist=(movieObj)=> {
    let newWatchlist = [...watchlist, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
    console.log(newWatchlist)
  }

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    setWatchlist(filteredWatchlist)
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist))
    console.log(filteredWatchlist)
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  }, []); 

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <>
                <WatchList watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App