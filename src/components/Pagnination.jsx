import React from 'react'

function Pagnination({handlePREV, handleNEXT, pageNo}) {
  return (
    <div className='bg-gray-400 p-3 mt-10 flex justify-center rounded-lg'>
      <div onClick={handlePREV} className='px-4 text-bold text-xl mt-2'>
        <i class="fa-solid fa-caret-left"></i>
      </div>
      <div className='text-bold text-xl bg-slate-950 p-2 text-white rounded-lg'>{pageNo}</div>
      <div onClick={handleNEXT} className='px-4 text-bold text-xl mt-2'>
        <i class="fa-solid fa-caret-right"></i>
      </div>
    </div>
  )
}

export default Pagnination
