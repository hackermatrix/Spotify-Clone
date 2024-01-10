import spotifylogo from "../assets/spotify-black.svg";
import IconText from "../components/IconText";
import { Icon } from "@iconify/react";
import TextwithHover from "../components/TextwithHover";
import { useContext, useEffect, useRef, useState } from "react";
import {Howl,Howler} from "howler"
import songContext from "../context/songContext";
import CreatePlaylistModal from "../components/CreatePlaylistModal";
import AddToPlaylistModal from "../components/AddToPlaylistModal";
import { AuthPOSTApiCall } from "../utils/apiHelpers";

const LoggedInContainer = ({children, currentPage}) => {
    
    const {currentSong,setCurrentSong,isPaused,setIsPaused,songPlayed,setSongPlayed} = useContext(songContext);

    const firstUpdate = useRef(true);


    useEffect(()=>{
      if(firstUpdate.current){
        firstUpdate.current = false;
        return;
      }

      if(!currentSong){
        return;
      }
      setIsPaused(true)
      changeSong(currentSong.track)
    },[currentSong && currentSong.track]);

    const changeSong = (srcSong)=>{

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


    const togglePlayPause = (srcSong)=>{
        setIsPaused(!isPaused)
        if(isPaused){
            songPlayed.pause();
        }
        else{
          songPlayed.play();
        }
    }

    const addSongToPlaylist = async(id)=>{
      const song = currentSong.id;
      const payload = {id,song}

      const response = await AuthPOSTApiCall("/api/playlist/add/song",payload);

      console.log(response)
    }

    const [isModalOpen,setIsModalOpen] = useState(false);

    const [isAddPlaylistOpen,setIsAddPlaylistOpen] = useState(false);

  return (
    <div className="h-full w-full bg-black">
      {isModalOpen?<CreatePlaylistModal closeModal={setIsModalOpen}/>:<></>}
      {isAddPlaylistOpen?<AddToPlaylistModal closeModal={setIsAddPlaylistOpen} addSongToPlaylist={addSongToPlaylist}/>:<></>}
      <div className={`${currentSong ?"h-9/10":"h-full"} w-full flex bg-opacity-30`}>
      <div className="h-full w-1/5 bg-app-black flex flex-col justify-between pb-10 mr-3  rounded-xl">
    <div>
    <div className="logoDiv p-6 ">
      <img src={spotifylogo} width={125} className="mb-6" />
    </div>

    <div className="py-5">
      <IconText iconName={"teenyicons:home-solid"} displayText={"Home"}  targetPath={"/home"} active={currentPage==="home"}/>
      <IconText iconName={"lucide:search"} displayText={"Search"} targetPath={"/SearchSong"} active={currentPage==="search"}/>
      <IconText iconName={"icomoon-free:books"} displayText={"Library"} targetPath={"/Library"} active={currentPage==="library"}/>
      <IconText iconName={"ic:baseline-library-music"} displayText={"My Music"} targetPath={"/MyMusic"} active={currentPage==="mymusic"}/>
    </div>
    
    <div className="py-3">
    <IconText iconName={"icon-park-solid:add"} displayText={"Create Playlist"} onClick={()=>setIsModalOpen(true)}/>
    <IconText iconName={"mdi:heart"} displayText={"Liked Songs"}/>        
    </div>
    </div>
    <div className="ml-5 border border-gray-100 rounded-full text-white w-1/4 text-center flex items-center px-2 py-1 justify-center cursor-pointer hover:border-white">
      <Icon icon="ph:globe" className="mr-2" fontSize={20}/><div className="text-sm font-semibold">English</div>
    </div>
  </div>
      <div className="h-full w-4/5 bg-app-black overflow-auto">
        <div className="navbar w-full bg-black h-1/10 bg-opacity-30 flex   items-center justify-end" >
          <div className="flex w-1/2 h-full items-center">
          <div className="flex w-3/5 h-full items-center justify-around">
          <TextwithHover text="Premium"/>
          <TextwithHover text="Support"/>
          <TextwithHover text="Download"/>
          <div className="border border-white h-1/3"></div>
          </div>
          <div className="flex h-full w-2/5 justify-around items-center">
            <a href={"/UploadSong"}><TextwithHover text="Upload Song"/></a>
          
          <div className="bg-white h-2/5 rounded-full font-semibold flex justify-center items-center px-8 cursor-pointer">HJ</div>
          </div>
          </div>
        </div>
        <div className="content p-8 pt-0 overflow-auto">
            {children}
        </div>
      </div>
    </div>
  { currentSong && <div className="w-full h-1/10 flex justify-center rounded-lg  bg-black items-center">
        <div className="startsection w-1/3 flex justify-start items-center space-x-3">
          <img className="w-16 h-16 rounded-lg" src={currentSong.thumbnail}/>
          <div className="flex flex-col">
            <div className="text-white text-lg font-semibold">{currentSong.name}</div>
            <div className="text-white text-sm">{currentSong.artist_info.username}</div>
          </div>
        </div>
        <div className="midsection w-1/3 h-full text-white">
          <div className="flex justify-center space-x-6 items-center mt-3">
            <Icon icon="ph:shuffle-fill"  fontSize={20} className="cursor-pointer" />
            <Icon icon="material-symbols:skip-previous" fontSize={30} className="cursor-pointer" />
            <Icon icon={isPaused?"gridicons:pause":"gridicons:play"} fontSize={35} onClick={()=>togglePlayPause(currentSong.track)} className="cursor-pointer"/>
            <Icon icon="material-symbols:skip-next" fontSize={30} className="cursor-pointer" />
            <Icon icon="ic:round-repeat" fontSize={20} className="cursor-pointer" />
          </div>
          <div></div>
        </div>
        <div className="endsection w-1/3 text-white flex justify-end items-center space-x-3 mr-4">
          
          <Icon icon={"ic:round-playlist-add"} width={34} className="cursor-pointer" onClick={()=>setIsAddPlaylistOpen(true)}/>
          <Icon icon={"mdi:heart-outline"} width={28} className="cursor-pointer"/>
        </div>
      </div>
      }
    </div>
  );
};

export default LoggedInContainer;
