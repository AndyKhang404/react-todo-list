import React from "react";
// import TodoListItem from "./TodoListItem";
// import "../styles/TodoList.css";

interface TodoListProps {
  children?: React.ReactNode;
}

const TodoList = ({ children }: TodoListProps) => {
  return (
    <div className="p-3">
      <ul className="list-group todo-list">{children}</ul>
    </div>
  );
};

export default TodoList;
