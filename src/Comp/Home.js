import React from 'react'
import Notes from './Notes'
// import { useContext } from 'react'
// import noteContext from '../Context/notes/noteContext'
import AddNotes from './AddNotes'
export default function Home() {
  // const a = useContext(noteContext);
  return (
    <>
      <div className="home">
        <AddNotes />
        <Notes />
      </div>
    </>
  )
}
