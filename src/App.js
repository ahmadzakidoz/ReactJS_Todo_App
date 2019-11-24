import React, { useState } from "react";
import Todos from "./Todos";
import "./App.css";
import AddTodo from "./AddTodo";

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <h1>ToDo App</h1>
        </div>
        <Todos />
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
