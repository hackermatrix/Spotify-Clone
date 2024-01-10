import React from "react";
import spotifylogo from "../assets/spotify-black.svg";
import IconText from "../components/IconText";
import { Icon } from "@iconify/react";
import TextwithHover from "../components/TextwithHover";
import PlaylistView from "../components/PlaylistView";
import LoggedInContainer from "../containers/LoggedInContainer";

const HomePage = () => {
  return (
    <LoggedInContainer currentPage="home">
           <PlaylistView titleText={"Focus"}/>
           <PlaylistView titleText={"City Sounds"}/>
           <PlaylistView titleText={"South Songs"}/>
           <PlaylistView titleText={"North Chills"}/>
           <PlaylistView titleText={"Vintage Vibes"}/>
           <PlaylistView titleText={"KK Specials"}/>
    </LoggedInContainer>
  );
};

export default HomePage;
