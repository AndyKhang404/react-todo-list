// import "../styles/TodoListItem.css";

interface TodoListItemProps {
  taskName: string;
}

const TodoListItem = ({ taskName }: TodoListItemProps) => {
  return (
    <li className="list-group-item todo-list-item d-flex align-items-center px-1">
      <span className="todo-list-task flex-fill mx-1 text-wrap">
        {taskName}
      </span>
      <div
        className="btn-group mx-1"
        role="group"
        aria-label="Finish or remove task"
      >
        <button type="button" className="btn btn-outline-danger">
          <i className="bi bi-trash-fill"></i>
        </button>
        <button type="button" className="btn btn-outline-success">
          <i className="bi bi-check2-square"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
