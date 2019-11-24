import React, { useState } from "react";

const AddTodo = props => {
  const [todo, setTodo] = useState("");

  const onInputChange = e => setTodo(e.target.value);

  const onSubmitTodo = e => {
    e.preventDefault();

    props.addTodo(todo);
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
