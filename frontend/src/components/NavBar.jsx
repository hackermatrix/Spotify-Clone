import React from 'react'
import spotifylogo from "../assets/spotify-black.svg";
import IconText from "../components/IconText";
import { Icon } from "@iconify/react";
import TextwithHover from "../components/TextwithHover";

const NavBar = () => {
  return (
    <div className="navbar w-full bg-black h-1/10 bg-opacity-30 flex   items-center justify-end">
    <div className="flex w-1/2 h-full items-center">
      <div className="flex w-3/5 h-full items-center justify-around">
        <TextwithHover text="Premium" />
        <TextwithHover text="Support" />
        <TextwithHover text="Download" />
        <div className="border border-white h-1/3"></div>
      </div>
      <div className="flex h-full w-2/5 justify-around items-center">
        <TextwithHover text="Upload Song" />
        <div className="bg-white h-2/5 rounded-full font-semibold flex justify-center items-center px-8 cursor-pointer">
          HJ
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavBar