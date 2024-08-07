import React from "react";

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
