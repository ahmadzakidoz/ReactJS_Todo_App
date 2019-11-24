import React, { useState } from "react";
import Todos from "./Todos";
import "./App.css";
import AddTodo from "./AddTodo";

function App() {
  const uuidv1 = require("uuid/v1");
  const [todos, setTodos] = useState([
    {
      id: uuidv1(),
      thing: "Go to School",
      isCompleted: false
    },
    {
      id: uuidv1(),
      thing: "Playing Football with Friends",
      isCompleted: false
    },
    {
      id: uuidv1(),
      thing: "Do Homework",
      isCompleted: false
    },
    {
      id: uuidv1(),
      thing: "Watching Movie Alone",
      isCompleted: false
    },
    {
      id: uuidv1(),
      thing: "Coding",
      isCompleted: false
    }
  ]);

  function onCheckbox(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        return todo;
      })
    );
  }

  const onClickDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = todo => {
    const newTodo = {
      id: uuidv1(),
      thing: todo,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <h1>ToDo App</h1>
        </div>
        <Todos todos={todos} onCheckbox={onCheckbox} onClickDelete={onClickDelete} />
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
