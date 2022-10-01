import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([])

  const deleteTodos  = (id) => {
    const new_todos = todos.filter(todo => todo.id !== id)
    setTodos(new_todos)
  }

  const addTodos = (title, description, date) => {
    const id = todos.length + 1
    setTodos(prevTodo => [...prevTodo, {id: id, title: title, description: description, date: date}])
  }

  const editTodos = (id,title,description,date) => {
    const new_todo = [...todos]
    const todo = new_todo.find(todo => todo.id === id)
    todo.title = title
    todo.description = description
    todo.date = date

    setTodos(new_todo)
  }

  return (
    <div className="container">
      <Header onAdd={addTodos}/>
      <Todos todos={todos} onDelete={deleteTodos} edit={editTodos}/>
    </div>
  );
}

export default App;
