import React, { useState, memo } from "react";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "Go to the store",
      descritption: "Buy milk, bread, eggs, juice, and coffee",
    },
    {
      id: 2,
      title: "Go to the gym",
      descritption: "Do the push ups, squats, and pull ups",
    },
    {
      id: 3,
      title: "Go to the park",
      descritption: "Play soccer, read a book, and go for a walk",
    },
  ]);

  function AddTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
      <div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter the title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Enter the description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />

        <button
          onClick={() => {
            setTodo([
              ...todos,
              {
                id: todos.length + 1,
                title: title,
                descritption: description,
              },
            ]);
          }}
        >
          Add
        </button>
      </div>
    );
  }

  return (
    <div>
      <AddTodo />
      <h1>My Todos</h1>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          descritption={todo.descritption}
        />
      ))}
    </div>
  );
}

const Todo = memo(function ({ title, descritption }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{descritption}</p>
    </>
  );
});

export default App;
