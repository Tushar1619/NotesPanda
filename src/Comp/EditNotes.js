import React from 'react'
import { useContext,useRef} from 'react'
import noteContext from '../Context/Notes/noteContext'
export default function EditNotes({inputElement,id,enote,setEnote}) {

    const data = useContext(noteContext)
    const {editNote} = data;

  const ref = useRef();
    
    
    const onChange = (event) => {
        setEnote({...enote,[event.target.name]:event.target.value})
    }

    const handleEditNote = (e)=>{
        e.preventDefault();
        editNote(enote._id,enote.title,enote.description,enote.tag);
        ref.current.click();
    }
    return (
        <div>
            <button type="button" ref={inputElement}  hidden className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='mt-3 container'>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label" >Title</label>
                                        <input type="text" className="form-control" name='title' value={enote.title} id="title" aria-describedby="title" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label" >Tag</label>
                                        <input type="text" className="form-control" name='tag' id="tag" value={enote.tag} aria-describedby="title" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <textarea id='description' value={enote.description} name='description' rows={6} cols={57} onChange={onChange} ></textarea>
                                        {/* <input type="textarea" className="form-control" id="description" /> */}
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={ref} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleEditNote}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
