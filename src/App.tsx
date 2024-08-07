import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
import TodoListInput from "./components/TodoListInput";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";
import { durationTilToday } from "./date_helper";
import { getTheme, setTheme } from "./theme_helper";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const unfinishedItems = useLiveQuery(async () => {
    const t = (await db.tasks.where("isFinished").equals(0).toArray()).sort(
      (a, b) => {
        const aOverdue = durationTilToday(a.date) < 0;
        const bOverdue = durationTilToday(b.date) < 0;
        let priorityComp = b.priority - a.priority;
        if (aOverdue) priorityComp += 10;
        if (bOverdue) priorityComp -= 10;
        return priorityComp;
      }
    );
    return t;
  });
  const finishedItems = useLiveQuery(async () => {
    const t = await db.tasks.where("isFinished").equals(1).toArray();
    return t;
  });
  let darkTheme = getTheme() === "dark";
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Todo List
          </a>
          <button
            type="button"
            className="btn"
            onClick={() => {
              if (!darkTheme) setTheme("dark");
              else setTheme("light");
              darkTheme = !darkTheme;
            }}
          >
            <i className="bi bi-circle-half"></i>
          </button>
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
                  db.tasks.where("taskId").equals(item.taskId).delete();
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
