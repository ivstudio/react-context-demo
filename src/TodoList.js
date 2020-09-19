import React from "react";
import TodoItem from "./TodoItem";
import TodoContext from "./TodoContext";

const TodoList = () => {
  const { todos } = React.useContext(TodoContext);
  return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
};

export default TodoList;
