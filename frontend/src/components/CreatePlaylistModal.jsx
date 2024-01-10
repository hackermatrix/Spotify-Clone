import React, { useState } from 'react'
import TextInput from "./TextInput"
import { AuthPOSTApiCall } from '../utils/apiHelpers';

const CreatePlaylistModal = ({closeModal}) => {
  const [name, setPlaylistName] = useState("")
  const [thumbnail, setPlaylistThumbnail] = useState("");

  const createPlaylist = async ()=>{
    
    const data = {name,thumbnail,songs:[],collaborators:[]};
    const response = await AuthPOSTApiCall("/api/playlist",data)

    if(response.id){
      closeModal(false);
    }
  }

  return (
    <div className='absolute w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center' onClick={()=>closeModal(false)}>
        <div className='bg-app-black rounded-lg w-1/4 p-4' onClick={(e)=>{e.stopPropagation()}}>
            <div className='font-semibold text-md mb-5 text-white'>Create Playlist</div>
            <TextInput labelClassName={"text-white"} label={"Name"} placeholder={"Playlist Name"} className={"mb-3"} value={name} setValue={setPlaylistName}/>
            <TextInput labelClassName={"text-white"} label={"Thumbnail"} placeholder={"Thumbnail"} value={thumbnail} setValue={setPlaylistThumbnail}/>

            <div className='flex justify-center mt-3'>
                <button className='bg-white text-black p-2 rounded-md' onClick={()=>createPlaylist()}>Create</button>
            </div>
        </div>
        
    </div>
  )
}

export default CreatePlaylistModal