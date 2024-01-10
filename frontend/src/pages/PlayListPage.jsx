import React, { useEffect, useState } from 'react'
import LoggedInContainer from '../containers/LoggedInContainer'
import Card from '../components/Card'
import { AuthGETApiCall } from '../utils/apiHelpers'
import { useNavigate } from 'react-router-dom'

const PlayListPage = () => {

    const [playlists,setPlaylists] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            const response = await AuthGETApiCall("/api/playlist/my");
            setPlaylists(response);
        }
        getData();
    },[playlists])

    const navigate = useNavigate();

  return (
    <LoggedInContainer currentPage={"library"}>
        <div className="text-2xl font-bold my-8 text-white  ">
            My Playlists
          </div>
          <div className='grid grid-cols-6 gap-x-4 '>
            {
                playlists.map((item)=>(
                    <div key={item.id} onClick={()=>navigate("/playlist/"+item.id)}>                    
                    <Card  title={item.name} imgUrl={item.thumbnail} className="cursor-pointer" />
                    </div>
                ))
            }
          </div>
    </LoggedInContainer>
  )
}

export default PlayListPage