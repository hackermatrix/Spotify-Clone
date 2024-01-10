import React, { useContext } from 'react'
import songContext from '../context/songContext'

export const SingleSongCard = ({info}) => {

  const {currentSong,setCurrentSong} = useContext(songContext)
  return (
    <div className='flex w-full text-white justify-between items-center hover:bg-gray-400 hover:bg-opacity-20 rounded-lg py-1 px-3 mb-4' onClick={()=>setCurrentSong(info)}>
        <div className='flex items-center'>
            <img className='w-16 h-16 rounded-lg mr-4' src={info.thumbnail} alt='Image'/>
            <div className='flex flex-col'>
                <div className='text-xl font-semibold hover:underline cursor-pointer'>{info.name}</div>
                <div className='text-sm hover:underline cursor-pointer'>{info?.artist_info.username}</div>
            </div>
        </div>

        <div className='text-gray-400 mr-16'>3:44</div>
    </div>
  )
}
