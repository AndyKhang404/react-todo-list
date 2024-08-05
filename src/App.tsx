// import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
// import { TodoListItemType } from "./components/TodoListItem";
import TodoListInput from "./components/TodoListInput";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const unfinishedItems = useLiveQuery(async () => {
    const t = (await db.tasks.where("isFinished").equals(0).toArray()).sort(
      (a, b) => b.priority - a.priority
    );
    return t;
  });
  const finishedItems = useLiveQuery(async () => {
    const t = (await db.tasks.where("isFinished").equals(1).toArray()).sort(
      (a, b) => b.priority - a.priority
    );
    return t;
  });
  // const [todoListItems, setTodoListItems] = useState<TodoListItemType[]>([]);
  // const [finishedItems, setFinishedItems] = useState<TodoListItemType[]>([]);
  // const addTodoListItem = (item: TodoListItemType) => {
  //   setTodoListItems(
  //     [item].concat(todoListItems).sort((a, b) => b.priority - a.priority)
  //   );
  // };
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
        <TodoListInput />
        <h4>
          <strong>Pending tasks</strong>
        </h4>
        <TodoList>
          {unfinishedItems && unfinishedItems.length ? (
            unfinishedItems.map((item) => (
              <TodoListItem
                key={item.id}
                item={item}
                onRemove={() => {
                  db.tasks.where("taskId").equals(item.taskId).delete;
                }}
                onFinish={() => {
                  db.tasks.update(item.id, { isFinished: 1 });
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
          {finishedItems && finishedItems.length ? (
            finishedItems.map((item) => (
              <TodoListItem
                key={item.id}
                item={item}
                onRemove={() => {
                  db.tasks.where("taskId").equals(item.taskId).delete();
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
