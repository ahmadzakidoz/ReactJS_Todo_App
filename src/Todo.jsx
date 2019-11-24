import React from "react";

const Todo = props => {
  return (
    <li>
      <input type="checkbox" onChange={props.onCheckbox.bind(this, props.todo.id)} />
      <span style={{ textDecoration: props.todo.isCompleted ? "line-through" : "none" }}>{props.todo.thing}</span>
      <button className="btn-delete" onClick={props.onClickDelete.bind(this, props.todo.id)}>
        X
      </button>
    </li>
  );
};

export default Todo;
