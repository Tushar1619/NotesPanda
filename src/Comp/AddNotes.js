import React, { useContext } from 'react'
import { useState } from 'react'
import noteContext from '../Context/Notes/noteContext'
// import axios from 'axios';
export default function AddNotes() {

    const data = useContext(noteContext);
    const{addNote} = data;

    const [note, setNote] = useState({title:"",description:"",tag:""})
    
    const onChange = (event)=>{
        setNote({...note,[event.target.name]:event.target.value});
    }

    const handleOnClick =(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""});
    }
    return (
        <div>
            <div className='container'>
                <h1 className='text-center mt-3'>Add Notes Here</h1>
                <div className='mt-3 container'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" name='title' id="title" value={note.title} aria-describedby="title" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label" >Tag</label>
                            <input type="text" className="form-control" name='tag' id="tag" value={note.tag} aria-describedby="title" onChange={onChange} />
                        </div>
                        <div className="mb-3"> 
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea id='description' value={note.description} name='description' rows={10} cols={146} onChange={onChange} ></textarea>
                            {/* <input type="textarea" className="form-control" id="description" /> */}
                        </div>
                       
                        <button type="submit" className="btn btn-primary"  onClick={handleOnClick}>AddNote</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
