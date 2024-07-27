// import React from 'react'
import TodoListItem from "./TodoListItem";
import "../styles/TodoList.css";

const TodoList = () => {
  return (
    <ul className="list-group todo-list">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  );
};

export default TodoList;
