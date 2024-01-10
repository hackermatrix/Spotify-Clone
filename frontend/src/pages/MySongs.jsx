import { AuthGETApiCall, AuthPOSTApiCall } from "../utils/apiHelpers";
import { SingleSongCard } from "../components/SingleSongCard";
import { useEffect, useState } from "react";
import {Howl,Howler} from "howler"
import LoggedInContainer from "../containers/LoggedInContainer";
// import { thumbnail as thumb} from "@cloudinary/url-gen/actions/resize";

const MySongs = () => {
    const [songs,setSongs] = useState([]);
    const [songPlayed,setSongPlayed] = useState(null);


    const playSong = (srcSong)=>{
      if(songPlayed){
        songPlayed.stop();
      }
      var sound = new Howl({
        src: [srcSong],
        html5: true
      });
      setSongPlayed(sound);
      sound.play();
    }

    useEffect(()=>{
        const getData = async()=>{
            const response = await AuthGETApiCall("/api/song/my");
            setSongs(response);
        }
        getData();
    }
        ,[])


  return (
<LoggedInContainer currentPage="mymusic">
<div className="text-2xl font-bold my-5 text-white my-12 ">
            My Songs
          </div>
          {songs.map((item)=>(
            <SingleSongCard key={item.id} info={item} playSong={playSong}/>
          ))}
</LoggedInContainer>
  )
};

export default MySongs;
