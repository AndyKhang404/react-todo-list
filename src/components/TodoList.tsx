// import React from 'react'
import TodoListItem from "./TodoListItem";
// import "../styles/TodoList.css";

interface TodoListProps {
  items?: string[];
}

const TodoList = ({ items }: TodoListProps) => {
  return (
    <div className="p-3">
      <ul className="list-group todo-list">
        {items?.length ? (
          items.map((item) => <TodoListItem key={item} taskName={item} />)
        ) : (
          <span className="text-opacity-50">It's quite empty here...</span>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
