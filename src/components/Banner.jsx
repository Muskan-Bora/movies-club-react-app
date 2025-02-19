import React from 'react'

function Banner() {
  return (
    <div className='h-[10vh] md:h-[78vh] bg-cover flex items-end' style={{backgroundImage : `url(https://collider.com/wp-content/uploads/avengers-character-poster-banner.jpeg)`}}>
        <div className='text-white text-1xl text-center w-full bg-cyan-950 p-2'>Avengers Endgame</div>
    </div>
  )
}

export default Banner
