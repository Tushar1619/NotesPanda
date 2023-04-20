import React, { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext';

export default function NoteItem({ note,focusInput }) {

    const data = useContext(noteContext);
    const {deleteNote} = data;

    const deleteClick = ()=>{
        deleteNote(note._id);
    }

    
    const editClick = ()=>{
        // console.log(note);
        focusInput(note);
    }
    return (

        <div className='col-md-3 mt-2 '>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title text-center">{note.title}</h5>
                    <hr />
                    <p class="fw-bold">{note.description}</p>
                    <p className="card-text">{note.tag}</p>
                    <small className="card-text text-body-secondary "> Updated {new Date(note.date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small><br/>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={editClick}></i>
                    <i className="fa-solid fa-trash mx-2" onClick={deleteClick}></i>
                </div>
            </div> 
        </div>
    )
}
