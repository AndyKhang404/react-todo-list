import { Dispatch, SetStateAction, useState } from "react";

interface TodoListInputProps {
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
}

const TodoListInput = ({ items, setItems }: TodoListInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const addNewItem = () => {
    if (inputValue.trim()) {
      setItems([inputValue].concat(items));
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
        defaultValue={""}
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
