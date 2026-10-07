import { useState } from "react";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  const newTodo = {
    id: window.crypto.randomUUID(),
    text: title,
  };

  const submitTodo = () => {
    console.log(title);
    setTodo([...todo, newTodo]);
  };
  // const checkValue = (e) =>{
  //     console.log(e.target.value)
  //     let input = e.target.value
  //     setTitle(input)
  // }
  return (
    <div className="mx-auto my-5 rounded border shadow p-5 col-8">
      <h1>Todo App</h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        className="form-control mb-3"
        type="text"
        placeholder="Type your todo"
      />
      <button onClick={submitTodo} className="btn btn-success w-100">
        Submit
      </button>

      {todo.length === 0 ? (
        <p className="my-2">No tasks yet — add one above!</p>
      ) : (
        <ul>
          {todo.map((todos) => (
            <li key={todos.id}>{todos.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoApp;
