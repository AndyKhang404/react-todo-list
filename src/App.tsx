import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
import { TodoListItemType } from "./components/TodoListItem";
import TodoListInput from "./components/TodoListInput";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [todoListItems, setTodoListItems] = useState<TodoListItemType[]>([]);
  const addTodoListItem = (item: TodoListItemType) => {
    setTodoListItems([item].concat(todoListItems));
  };
  return (
    <div className="container-md">
      <TodoListInput onAddItem={addTodoListItem} />
      <TodoList>
        <h4>
          <strong>Pending tasks</strong>
        </h4>
        {todoListItems.length ? (
          todoListItems.map((item) => (
            <TodoListItem
              key={item.id}
              item={item}
              onRemove={() => {
                setTodoListItems(todoListItems.filter((n) => n.id != item.id));
              }}
              onFinish={() => {
                setTodoListItems(
                  todoListItems.map((n) => {
                    if (n.id == item.id) n.isFinished = true;
                    return n;
                  })
                );
              }}
            />
          ))
        ) : (
          <span className="text-secondary text-opacity-50">
            It's quite empty here...
          </span>
        )}
      </TodoList>
      <TodoList>
        <h4>
          <strong>Finished tasks</strong>
        </h4>
        <span className="text-secondary text-opacity-50">
          You haven't finished any tasks!
        </span>
      </TodoList>
    </div>
  );
}

export default App;
