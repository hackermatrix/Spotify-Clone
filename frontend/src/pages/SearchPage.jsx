import React, { useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from "@iconify/react";
import { AuthGETApiCall } from "../utils/apiHelpers";
import { SingleSongCard } from "../components/SingleSongCard";

const SearchPage = () => {
  const [inFocus, setInFocus] = useState(false);
  const [searchSong, setSearchSong] = useState("");
  const [Result, setResult] = useState("")

  const search = async(name) =>{
    const response = await AuthGETApiCall(`/api/song/byName?name=${name}`)
    setResult(response);
  }

  return (
    <LoggedInContainer currentPage="search">
      <div
        className={`my-3 w-2/6 rounded-full py-3 px-4 bg-gray-400 bg-opacity-20 text-white flex space-x-2 items-center ${
          inFocus ? "border border-white" : "outline-none"
        }`}
      >
        <Icon icon={"lucide:search"} />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="bg-gray-400 bg-opacity-0 outline-none"
          onFocus={() => setInFocus(true)}
          onBlur={() => setInFocus(false)}
          onChange={(e)=>setSearchSong(e.target.value)}
          onKeyUp={(e)=>(e.key=="Enter"?search(searchSong):console.log("Not yet"))}
        />
      </div>
      <div className="body mt-16">
        
        {Result && Result.map((item)=>(
            <div key={item.id}><SingleSongCard info={item}/></div>
        ))}
      </div>
    </LoggedInContainer>
  );
};

export default SearchPage;
