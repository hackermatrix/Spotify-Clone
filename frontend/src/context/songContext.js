import { createContext } from "react";

const songContext = createContext({
    currentSong:null,
    setCurrentSong:()=>{},
    isPaused:null,
    setIsPaused:()=>{},
    songPlayed:null,
    setSongPlayed:()=>{}
});

export default songContext;