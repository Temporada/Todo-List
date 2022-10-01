import React, { useState } from "react";
import Todo from "./Todo";

function Todos({todos, onDelete, edit}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState('')

    const onEdit = (todo) => {
        setTitle(todo.title)
        setDescription(todo.description)
        setDate(todo.date)
        setId(todo.id)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title || !date || !description){
            alert('Invalid')
            return
        }
        else{
            edit(id,title,description,date)

        }
    }

    return (
        <div className='container-fluid row mt-5 pt-5'>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>
            ))}
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3" onSubmit={onSubmit} method="POST">
                                <div className="col-md-12">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" rows="5" value={description} onChange={(e) => setDescription(e.target.value) }></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="date" className="form-label">Date</label>
                                    <input type='date'className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                </div>
                                <div className="col-md-12">
                                <input type='submit' className="btn btn-success float-end" value="Update Note" data-bs-dismiss="modal"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos;