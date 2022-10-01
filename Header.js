import React, { useState } from "react";



function Header({onAdd}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if(!title || !description || !date){
            alert("Error")
        }
        else{
            onAdd(title,description,date)
            alert("New Note Added")
        }
        setTitle('')
        setDescription('')
        setDate('')
    }

    return (
        <div className="container d-flex p-2">
            <h1 className='text-center w-75'>Todo App</h1>
            <button type="button" className="btn btn-primary mt-1 mb-1 ms-5" data-bs-toggle="modal" data-bs-target="#noteModal">Add Notes</button>
            <div className="modal fade" id="noteModal" tabIndex="-1" aria-labelledby="noteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3" onSubmit={onSubmit}>
                                <div className="col-md-12">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="date" className="form-label">Date</label>
                                    <input type='date'className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                                </div>
                                <div className="col-md-12">
                                    <input type='submit' className="btn btn-success float-end" value="Add Note"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;