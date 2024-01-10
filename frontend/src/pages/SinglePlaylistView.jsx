import React, { useContext, useEffect, useState } from 'react'
import LoggedInContainer from '../containers/LoggedInContainer'
import { useParams } from 'react-router-dom'
import { AuthGETApiCall } from '../utils/apiHelpers';
import { SingleSongCard } from '../components/SingleSongCard';

const SinglePlaylistView = () => {
    // const {setCurrentSong} = useContext();
    const {playlistId} = useParams();
    const [playlist , setPlaylist] = useState([]);
    const [songs,setSongs] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            const response = await AuthGETApiCall("/api/playlist/"+playlistId);
            setPlaylist(response)
            setSongs(response.songs)
        }
        getData();
    },[])

    console.log(playlist.songs)


  return (
    <LoggedInContainer currentPage={"library"}>
        <div className="text-2xl font-bold my-5 text-white my-12 ">
            {playlist.name}
          </div>
        {
            playlist && songs.map((item)=>(
                <div key={item.id}>
                <SingleSongCard info={item}/>
                </div>
            ))
        }
    </LoggedInContainer>
  )
}

export default SinglePlaylistView