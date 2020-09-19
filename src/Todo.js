import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoCounter from "./TodoCounter";
import TodoContext from "./TodoContext";
import { todoReducer } from "./reducer/todoReducer";

export default function Todo() {
  const [todos, dispatch] = React.useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <TodoCounter />
      <AddTodo />
      <TodoList />
    </TodoContext.Provider>
  );
}
