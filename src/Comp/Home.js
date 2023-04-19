import React from 'react'
import Notes from './Notes'
import { useEffect } from 'react'
// import noteContext from '../Context/notes/noteContext'
import AddNotes from './AddNotes'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  // const a = useContext(noteContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token'))
      navigate("/login");
}, [])
  
  return (
    <>
      <div className="home">
        <AddNotes />
        <Notes />
      </div>
    </>
  )
}
