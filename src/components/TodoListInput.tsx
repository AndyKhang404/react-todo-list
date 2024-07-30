import { useState } from "react";
import { TodoListItemType } from "./TodoListItem";
import { v4 as uuidv4 } from "uuid";

interface TodoListInputProps {
  onAddItem: (item: TodoListItemType) => void;
}

const TodoListInput = ({ onAddItem }: TodoListInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const addNewItem = () => {
    if (inputValue.trim()) {
      const newItem: TodoListItemType = {
        name: inputValue,
        id: uuidv4(),
        isFinished: false,
      };
      onAddItem(newItem);
    }
    setInputValue("");
  };
  return (
    <form className="my-3">
      <label htmlFor="basic-url" className="form-label">
        What do you want to do?
      </label>
      <div className="input-group px-3">
        <input
          type="text"
          className="form-control"
          id="task-name-input"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key == "Enter" && addNewItem();
          }}
        />
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Priority...</option>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
        <button type="button" className="btn btn-primary" onClick={addNewItem}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </form>
  );
};

export default TodoListInput;
