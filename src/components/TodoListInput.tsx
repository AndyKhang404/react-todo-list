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
    <div className="p-3 d-flex">
      <input
        type="text"
        className="form-control flex-fill"
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
      <button
        type="button"
        className="btn btn-primary mx-3"
        onClick={addNewItem}
      >
        <i className="bi bi-plus-lg"></i>
      </button>
    </div>
  );
};

export default TodoListInput;
