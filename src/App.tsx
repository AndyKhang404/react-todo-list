import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
import { TodoListItemType } from "./components/TodoListItem";
import TodoListInput from "./components/TodoListInput";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [todoListItems, setTodoListItems] = useState<TodoListItemType[]>([]);
  const [finishedItems, setFinishedItems] = useState<TodoListItemType[]>([]);
  const addTodoListItem = (item: TodoListItemType) => {
    setTodoListItems(
      [item].concat(todoListItems).sort((a, b) => b.priority - a.priority)
    );
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Todo List
          </a>
        </div>
      </nav>
      <div className="container-md">
        <TodoListInput onAddItem={addTodoListItem} />
        <h4>
          <strong>Pending tasks</strong>
        </h4>
        <TodoList>
          {todoListItems.length ? (
            todoListItems.map((item) => (
              <TodoListItem
                key={item.id}
                item={item}
                onRemove={() => {
                  setTodoListItems(
                    todoListItems.filter((n) => n.id !== item.id)
                  );
                }}
                onFinish={() => {
                  setTodoListItems(
                    todoListItems.filter((n) => {
                      return n.id !== item.id;
                    })
                  );
                  setFinishedItems(
                    todoListItems
                      .filter((n) => n.id === item.id)
                      .map((n) => {
                        n.isFinished = true;
                        return n;
                      })
                      .concat(finishedItems)
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
        <h4>
          <strong>Finished tasks</strong>
        </h4>
        <TodoList>
          {finishedItems.length ? (
            finishedItems.map((item) => (
              <TodoListItem
                key={item.id}
                item={item}
                onRemove={() => {
                  setFinishedItems(
                    finishedItems.filter((n) => n.id !== item.id)
                  );
                }}
              />
            ))
          ) : (
            <span className="text-secondary text-opacity-50">
              You have finished all tasks!
            </span>
          )}
        </TodoList>
      </div>
    </>
  );
}

export default App;
