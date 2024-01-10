import spotifylogo from "../assets/spotify-black.svg";
import IconText from "../components/IconText";
import { Icon } from "@iconify/react";

const SideBar = () => {
  return (
    <div className="h-full w-1/5 bg-app-black flex flex-col justify-between pb-10 mr-3  rounded-xl">
    <div>
    <div className="logoDiv p-6 ">
      <img src={spotifylogo} width={125} className="mb-6" />
    </div>

    <div className="py-5">
      <IconText iconName={"teenyicons:home-solid"} displayText={"Home"} active />
      <IconText iconName={"lucide:search"} displayText={"Search"} />
      <IconText iconName={"icomoon-free:books"} displayText={"Library"}/>
      <IconText iconName={"ic:baseline-library-music"} displayText={"My Music"}/>
    </div>
    
    <div className="py-3">
    <IconText iconName={"icon-park-solid:add"} displayText={"Create Playlist"}/>
    <IconText iconName={"mdi:heart"} displayText={"Liked Songs"}/>        
    </div>
    </div>
    <div className="ml-5 border border-gray-100 rounded-full text-white w-1/4 text-center flex items-center px-2 py-1 justify-center cursor-pointer hover:border-white">
      <Icon icon="ph:globe" className="mr-2" fontSize={20}/><div className="text-sm font-semibold">English</div>
    </div>
  </div>
  )
}

export default SideBar