import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

const AddTodo = props => {
  const [todos, setTodos] = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const onInputChange = e => setTodo(e.target.value);

  const uuidv1 = require("uuid/v1");

  const addTodo = todo => {
    const newTodo = {
      id: uuidv1(),
      thing: todo,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
  };

  const onSubmitTodo = e => {
    e.preventDefault();

    addTodo(todo);
    setTodo("");
  };

  return (
    <div className="form-here">
      <form onSubmit={onSubmitTodo} className="form-add">
        <input type="text" value={todo} onChange={onInputChange} className="input-todo" placeholder="Add Todo.." />
        <button type="submit" className="btn-add">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
