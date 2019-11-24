import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = props => {
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

  return <TodoContext.Provider value={[todos, setTodos]}>{props.children}</TodoContext.Provider>;
};
