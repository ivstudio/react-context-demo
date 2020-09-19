import React from "react";
import TodoContext from "./TodoContext";

const TodoItem = ({ todo }) => {
  const { dispatch } = React.useContext(TodoContext);
  const onDelete = () => {
    dispatch({ type: "REMOVE_TODO", payload: todo });
  };

  return (
    <div>
      <hr />
      <span>{todo.title}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
