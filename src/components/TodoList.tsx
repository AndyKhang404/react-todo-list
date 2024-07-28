// import React from 'react'
import TodoListItem from "./TodoListItem";
// import "../styles/TodoList.css";

const TodoList = () => {
  return (
    <div className="p-3">
      <ul className="list-group todo-list">
        <TodoListItem taskName="Walking the dog" />
        <TodoListItem taskName="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla arcu, fermentum quis luctus ut, imperdiet at eros. Cras commodo consequat lectus. Duis sodales et leo in lacinia. Sed sed nulla dapibus, dapibus metus quis, tempus tellus. Morbi pulvinar rutrum congue. Quisque vel fringilla nisl. Praesent nibh eros, efficitur ut sodales vel, maximus vel ligula." />
        <TodoListItem taskName="Doing the dishes" />
      </ul>
    </div>
  );
};

export default TodoList;
