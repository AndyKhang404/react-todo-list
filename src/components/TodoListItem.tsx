// import "../styles/TodoListItem.css";

export interface TodoListItemProps {
  task: { name: string; id: string };
}

const TodoListItem = ({ task }: TodoListItemProps) => {
  return (
    <li className="list-group-item todo-list-item d-flex align-items-center px-1">
      <span className="todo-list-task flex-fill mx-1 text-wrap">
        {task.name}
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
