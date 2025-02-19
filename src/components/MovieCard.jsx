import React from "react";

function MovieCard({
  poster_path,
  name,
  handleAddtoWatchList,
  movieObj,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <div
        className="h-[50vh] w-[230px] bg-cover bg-center rounded-2xl hover:cursor-pointer hover:scale-110 duration-300 shadow-md shadow-gray-950 relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movieObj) ? (
          <div
            onClick={() => handleRemoveFromWatchlist(movieObj)}
            className="absolute right-0 p-1 bg-gray-900/40 text-2xl rounded-2xl m-2"
          >
            &#128078;
          </div>
        ) : (
          <div
            onClick={() => handleAddtoWatchList(movieObj)}
            className="absolute right-0 p-1 bg-gray-900/40 text-2xl rounded-2xl m-2"
          >
            &#128077;
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full p-2 bg-gray-900/40 text-xl text-white text-center opacity-0 hover:opacity-100 transition:opacaity duration-300">
          {name}
        </div>
      </div>
    </>
  );
}

export default MovieCard;

// `url(https://image.tmdb.org/t/p/orginial/${poster_path})` --> Poster path url

// `url(https://image.tmdb.org/t/p/original/${poster_path})`
