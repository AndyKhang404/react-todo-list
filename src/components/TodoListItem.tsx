// import "../styles/TodoListItem.css";

export interface TodoListItemType {
  name: string;
  id: string;
  isFinished: boolean;
}
interface TodoListItemProps {
  item: TodoListItemType;
  onRemove: () => void;
  onFinish: () => void;
}

const TodoListItem = ({ item, onRemove, onFinish }: TodoListItemProps) => {
  return (
    <li className="list-group-item todo-list-item d-flex align-items-center px-1">
      <span
        className={
          "todo-list-task flex-fill mx-1 text-wrap " +
          (item.isFinished
            ? "text-success text-decoration-line-through text-opacity-50"
            : "")
        }
      >
        {item.name}
      </span>
      <div
        className="btn-group mx-1"
        role="group"
        aria-label="Finish or remove task"
      >
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={onRemove}
        >
          <i className="bi bi-trash-fill"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={onFinish}
        >
          <i className="bi bi-check2-square"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
