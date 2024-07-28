const TodoListInput = () => {
  return (
    <div className="p-3 d-flex">
      <input
        type="text"
        className="form-control flex-fill"
        id="task-name-input"
        placeholder="Add a new task..."
      />
      <button type="button" className="btn btn-primary mx-3">
        <i className="bi bi-plus-lg"></i>
      </button>
    </div>
  );
};

export default TodoListInput;
