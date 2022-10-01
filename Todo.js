import React from "react";



function Todo ({todo, onDelete, onEdit}) {
    return(
        <div className='col-md-3 mb-4'>
            <div className='card text-bg-warning'>
                <div className='card-header'>
                    <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close" onClick={() => onDelete(todo.id)}></button>
                    <h5>{todo.title}</h5>
                </div>
                <div className='card-body '>
                    <p className='text-end'>{todo.date}</p>
                    <p className='card-text'>{todo.description}</p>
                    <a href='#' onClick={() => onEdit(todo)} className='float-end' data-bs-toggle="modal" data-bs-target="#editModal"><img src="https://img.icons8.com/external-febrian-hidayat-glyph-febrian-hidayat/64/000000/external-edit-user-interface-febrian-hidayat-glyph-febrian-hidayat.png" height="30"/></a>
                </div>
            </div>
        </div>
    )
}

export default Todo;