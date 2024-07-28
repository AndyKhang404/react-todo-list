// import { useState } from 'react';
import TodoList from "./components/TodoList";
import TodoListInput from "./components/TodoListInput";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="container-md">
      <TodoListInput />
      <TodoList />
    </div>
  );
}

export default App;
