import "../styles/TodoListItem.css";

const TodoListItem = () => {
  return (
    <li className="list-group-item todo-list-item">
      <p className="todo-list-task">Task</p>
      <button type="button" className="btn btn-danger">
        <i className="bi bi-trash-fill"></i>
      </button>
      <button type="button" className="btn btn-success">
        <i className="bi bi-check2-square"></i>
      </button>
    </li>
  );
};

export default TodoListItem;
