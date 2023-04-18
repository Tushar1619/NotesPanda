
import { useState } from 'react';
import React from 'react'
import noteContext from './noteContext';
import axios from 'axios'
// import { useEffect } from 'react';

export default function NoteState({ children }) {
  const data = []
  const [notes, changeNotes] = useState(data)
  const getAllNotes = async () => {
    const response = await axios.get('http://localhost:4000/api/notes/fetchallnotes', {
      headers: {
        "auth-token": localStorage.getItem('token')
      }
    })
    //  response.data
    console.log(response.data);
    changeNotes(response.data)
  }


  //addNotes in database done
  const addNote = async (title, description, tag) => {
    const body = {
      title: title,
      description: description,
      tag: tag
    }
    // eslint-disable-next-line
    const response = await axios.post('http://localhost:4000/api/notes/addnote',
      body
      , {
        headers: {
          "auth-token": localStorage.getItem('token')
        }
      })
    console.log("Note added");
 
    getAllNotes();
  }

  // edit notes in the data base toBeDone
  const editNote = async (id, title, description, tag) => {
    const body = {
      title: title,
      description: description,
      tag: tag
    }
    const response = await axios.put(`http://localhost:4000/api/notes/editnote/${id}`,
      body
      , {
        headers: {
          "auth-token": localStorage.getItem('token')
        }
      })
      console.log("edited "+body);
      getAllNotes();
  }

  //delete notes from the database done!
  const deleteNote = async (id) => {
    const response = await axios.delete(`http://localhost:4000/api/notes/deletenote/${id}`, {
      headers: {
        "auth-token": localStorage.getItem('token')
      }
    })
    console.log(response.data);
    // console.log("will delete this id "+id);
    // const newNote = notes.filter((note)=>{return note._id!==id});
    getAllNotes();
  }

  return (
    <noteContext.Provider value={{ notes, addNote, editNote, deleteNote, getAllNotes,alert }}>
      {children}
    </noteContext.Provider>
  )
}
