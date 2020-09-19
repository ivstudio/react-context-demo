import React from "react";
import TodoContext from "./TodoContext";

const TodoCounter = () => {
  const { todos } = React.useContext(TodoContext);
  return <h2>Total of todos: {todos.length}</h2>;
};

export default TodoCounter;
