import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
import { TodoListItemProps } from "./components/TodoListItem";
import TodoListInput from "./components/TodoListInput";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [todoListItems, setTodoListItems] = useState<TodoListItemProps[]>([]);
  return (
    <div className="container-md">
      <TodoListInput items={todoListItems} setItems={setTodoListItems} />
      <TodoList>
        {todoListItems.length ? (
          todoListItems.map(({ task }) => (
            <TodoListItem key={task.id} task={task} />
          ))
        ) : (
          <span className="text-secondary text-opacity-50">
            It's quite empty here...
          </span>
        )}
      </TodoList>
    </div>
  );
}

export default App;
