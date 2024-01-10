import './App.css'
import { BrowserRouter , Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import LoggedInHomePage from './pages/LoggedInHomePage'
import UploadSong from './pages/UploadSong'
import MySongs from './pages/MySongs'
import songContext from './context/songContext'
import { useState } from 'react'
import SearchPage from './pages/SearchPage'
import PlayListPage from './pages/PlayListPage'
import SinglePlaylistView from './pages/SinglePlaylistView'

export default function App() {
  const token = localStorage.getItem("access");

  const [currentSong,setCurrentSong] = useState(null);
  const [isPaused,setIsPaused] = useState(true);
  const [songPlayed,setSongPlayed] = useState(null);


  
  return (
    <div className='w-screen h-screen font-poppins'>
    <BrowserRouter>
{token?
// Loggedin Routes
(    <songContext.Provider value={{currentSong,setCurrentSong,isPaused,setIsPaused,songPlayed,setSongPlayed}}><Routes>
      <Route path='/home' element={<LoggedInHomePage/>}/>
      <Route path='/UploadSong' element={<UploadSong/>}/>
      <Route path='/MyMusic' element={<MySongs/>}/>
      <Route path='/Library' element={<PlayListPage/>}/>
      <Route path='/SearchSong' element={<SearchPage/>}/>
      <Route path='/Playlist/:playlistId' element={<SinglePlaylistView/>}/>
      <Route path='*' element={<Navigate to={"/home"}/>}/>
    </Routes></songContext.Provider>)
    
    :
// UnAuth Routes
(    <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='*' element={<Navigate to={"/login"}/>}/>
    </Routes>)}
    </BrowserRouter>
    </div>
  )
}
