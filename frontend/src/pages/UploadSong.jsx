import spotifylogo from "../assets/spotify-black.svg";
import IconText from "../components/IconText";
import { Icon } from "@iconify/react";
import TextwithHover from "../components/TextwithHover";
import PlaylistView from "../components/PlaylistView";
import TextInput from "../components/TextInput";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AuthPOSTApiCall } from "../utils/apiHelpers";
import SideBar from "../components/SideBar";
// import { thumbnail as thumb} from "@cloudinary/url-gen/actions/resize";

const UploadSong = () => {
  const cloud = import.meta.env.cloud;
  const preset = import.meta.env.preset;
  const [publicId, setPublicId] = useState("");
  const [cloudName] = useState(cloud);
  // Move this to env file
  const [uploadPreset] = useState(preset);

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
  });


  const [name,setSongName] = useState("");
  const [fileName,setFileName] = useState("");
  const [thumbnail,setThumb] = useState("");
  const [track,setFileUrl] = useState("") 


  const data = {name,thumbnail,track};


  return (
    <div className="h-full w-full flex">
      <SideBar/>

      <div className="h-full w-4/5 bg-app-black overflow-auto">
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
        <div className="content p-8 pt-0 overflow-auto flex flex-col justify-center items-center">
          <div className="text-3xl font-bold my-5 text-white my-12 ">
            Upload your Music
          </div>
          <div >
            <div className="flex space-x-3 w-1/2 my-2">
              <TextInput
                labelClassName="text-white text-lg"
                label={"Name"}
                placeholder={"Song Name"}
                value={name}
                setValue={setSongName}
              />
              <TextInput
                labelClassName="text-white text-lg"
                label={"Thumbnail"}
                placeholder={"Thumbnail"}
                value={thumbnail}
                setValue={setThumb}
              />
            </div>
            <div className="flex justify-center items-center mt-6 space-x-4">
              {fileName?
              <div className="text-md font-semibold  bg-white py-2 px-8 rounded-full ">
                {fileName.substring(0,10)}...
              </div>
              :
              <CloudinaryUploadWidget
              uwConfig={uwConfig}
              setPublicId={setPublicId}
              setFileName = {setFileName}
              setFileUrl = {setFileUrl}
            />}
            <button className="bg-white rounded-full py-2 px-6 font-semibold text-lg" onClick={()=>AuthPOSTApiCall("/api/song",data)}>Submit Song</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSong;
