import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoListInput from "./components/TodoListInput";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [todoListItems, setTodoListItems] = useState<string[]>([]);
  return (
    <div className="container-md">
      <TodoListInput items={todoListItems} setItems={setTodoListItems} />
      <TodoList items={todoListItems} />
    </div>
  );
}

export default App;
