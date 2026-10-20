// import React from 'react'

import { useEffect, useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(()=>{
    try {
      const saved = JSON.parse(localStorage.getItem("todos")) || []
      // normalize: older saves may be plain strings
      return saved.map((t, i) =>
        typeof t === "string" ? { id: Date.now() + i, text: t } : t
      )
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  useEffect(()=> {
    document.title = `My Todos (${todos.length})`
  }, [todos.length])
  

  const addTodo = () => {
     if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task.trim() }])
    // console.log(todos)
    setTask("");
  };

  const deleteTask = (index) => {
  // 1. Show a confirmation dialog to the user
  const isConfirmed = window.confirm("Are you sure you want to delete this task?");
  
  // 2. If the user clicks "OK", proceed with the deletion
  if (isConfirmed) {
    setTodos(todos.filter((_, i) => i !== index));
  }
};
  return (
    <div className="mx-auto col-7 rounded p-3 my-3 border shadow">
      <h1 className="text-center fs-3 text-success">Todo App</h1>

      <input
        className="form-control mb-3"
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-success" onClick={addTodo}>
        Add Task
      </button>

      {todos.length === 0 ? (<p>No tasks has been added!</p>) : (
        <ul>
          {
            todos.map((todo, index)=>(
              <li key={todo.id}>
                {todo.text}
                <button onClick={()=>deleteTask(index)}>Delete</button>
              </li>
            ))
          }
        </ul>
      )}


    </div>
  );
};

export default TodoApp;
