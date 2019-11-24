import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";

const Todos = props => {
  const [todos, setTodos] = useContext(TodoContext);

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

  return (
    <div className="content">
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} onCheckbox={onCheckbox} onClickDelete={onClickDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
