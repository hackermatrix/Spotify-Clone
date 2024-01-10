import React, { useEffect, useState } from 'react'
import TextInput from './TextInput'
import { AuthGETApiCall } from '../utils/apiHelpers'

const AddToPlaylistModal = ({closeModal,addSongToPlaylist}) => {
    const [playlists,setPlaylists] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            const response = await AuthGETApiCall("/api/playlist/my");
            setPlaylists(response);
        }
        getData();
    },[])

  return (
    <div className='absolute w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center' onClick={()=>closeModal(false)}>
    <div className='bg-app-black rounded-lg w-1/4 p-4' onClick={(e)=>{e.stopPropagation()}}>
        <div className='font-semibold text-md mb-5 text-white '>Add to Playlist</div>
        {
            playlists.map((item)=>(
                <PlayListList key={item.id} info={item} addSongToPlaylist={addSongToPlaylist}/>
            ))
        }
    </div>
    
</div>
  )
}

const PlayListList = ({info,addSongToPlaylist}) =>{

    return(
        <div 
        className='text-white flex bg-app-black items-center space-x-5 hover:bg-gray-300 hover:bg-opacity-30 rounded-md p-3 cursor-pointer'
        onClick={()=>{addSongToPlaylist(info.id)}}
        >
            <div>
            <img className="w-16 h-16 rounded-md" src={info.thumbnail} alt="thumb"/>
            </div>
            <div className='font-bold'>{info.name}</div>
        </div>
    )
}


export default AddToPlaylistModal