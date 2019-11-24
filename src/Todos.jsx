import React from "react";
import Todo from "./Todo";

const Todos = props => {
  return (
    <div className="content">
      <ul>
        {props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} onCheckbox={props.onCheckbox} onClickDelete={props.onClickDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
