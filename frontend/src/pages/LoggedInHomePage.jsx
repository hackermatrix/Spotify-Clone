import PlaylistView from "../components/PlaylistView";
import LoggedInContainer from "../containers/LoggedInContainer";



const LoggedInHomePage = () =>{
  return(
  <LoggedInContainer currentPage={'home'}>
    <PlaylistView titleText={"Focus"}/>
    <PlaylistView titleText={"City Sounds"}/>
    <PlaylistView titleText={"South Songs"}/>
    <PlaylistView titleText={"North Chills"}/>
    <PlaylistView titleText={"Vintage Vibes"}/>
    <PlaylistView titleText={"KK Specials"}/>
  </LoggedInContainer>
  )
}


export default LoggedInHomePage;
