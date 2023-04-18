import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import noteContext from '../Context/Notes/noteContext'
import NoteItem from './NoteItem';
import EditNotes from './EditNotes';
import { useRef } from 'react'
export default function Notes() {
    const [enote, setEnote] = useState({});
    const inputElement = useRef();
    const focusInput = (note) => {
        inputElement.current.click();
        console.log(note);
        setEnote(note);
    };


    const data = useContext(noteContext);
    const { notes, getAllNotes } = data;
    useEffect(() => {
        getAllNotes();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <EditNotes inputElement={inputElement} enote={enote} setEnote={setEnote} />
            {notes.length !== 0 && <h1 className='mt-3 text-center'>Your Notes</h1>}
            <div className="container">
                <div className="row ">
                    {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} focusInput={focusInput} />

                    })}
                </div>
            </div>

        </div>
    )
}
