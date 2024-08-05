// import "../styles/TodoListItem.css";
import { DBTodoItems } from "../db";
import { durationString } from "../date_helper";

const priorityColor = ["", "#2C78BF", "#ff9100", "#EF2F27"];

interface TodoListItemProps {
  item: DBTodoItems;
  onRemove?: () => void;
  onFinish?: () => void;
}

const TodoListItem = ({ item, onRemove, onFinish }: TodoListItemProps) => {
  return (
    <li className="list-group-item todo-list-item d-flex align-items-start px-1">
      {item.priority === 1 && (
        <i
          className="bi bi-info-circle-fill mx-1"
          style={{ color: priorityColor[item.priority] }}
        ></i>
      )}
      {item.priority === 2 && (
        <i
          className="bi bi-exclamation-triangle-fill mx-1"
          style={{ color: priorityColor[item.priority] }}
        ></i>
      )}
      {item.priority === 3 && (
        <i
          className="bi bi-exclamation-octagon-fill mx-1"
          style={{ color: priorityColor[item.priority] }}
        ></i>
      )}
      <span
        className={
          "todo-list-task flex-fill mx-1 text-wrap " +
          (item.isFinished
            ? "text-success text-decoration-line-through text-opacity-50"
            : "")
        }
        style={{ color: priorityColor[item.priority] }}
      >
        {item.name}
      </span>
      <span className="badge text-bg-primary">{durationString(item.date)}</span>
      {/* <span className="badge text-bg-danger">{item.date}</span> */}
      <div
        className="btn-group mx-1"
        role="group"
        aria-label="Finish or remove task"
      >
        {onRemove && (
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onRemove}
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        )}
        {onFinish && (
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={onFinish}
          >
            <i className="bi bi-check2-square"></i>
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoListItem;
