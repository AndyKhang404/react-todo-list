import { useState } from "react";
import { TodoListItemType } from "./TodoListItem";
import { v4 as uuidv4 } from "uuid";
// import "../styles/TodoListInput.css";

interface TodoListInputProps {
  onAddItem: (item: TodoListItemType) => void;
}

const TodoListInput = ({ onAddItem }: TodoListInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const today = () => {
    let d = new Date();
    const offset = d.getTimezoneOffset();
    d = new Date(d.getTime() - offset * 60 * 1000);
    return d.toISOString().split("T")[0];
  };
  // const isDate = (d: string) => {
  //   const dateObj = new Date(d);
  //   return dateObj instanceof Date && !isNaN(dateObj.valueOf());
  // };
  const [inputDateValue, setInputDateValue] = useState(today());
  const [inputPriorityValue, setInputPriorityValue] = useState(0);
  // const [invalidDate, setInvalidDate] = useState(false);
  const addNewItem = () => {
    if (inputValue.trim()) {
      const newItem: TodoListItemType = {
        name: inputValue,
        id: uuidv4(),
        isFinished: false,
        priority: inputPriorityValue,
      };
      onAddItem(newItem);
    }
    setInputValue("");
  };
  return (
    <form className="my-3 border rounded bg-body-tertiary p-3 container">
      <div className="row">
        <label className="form-label">What do you want to do?</label>
        <div className="input-group">
          <textarea
            // type="text"
            className="form-control flex-grow-1"
            id="task-name-input"
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addNewItem();
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            style={{ resize: "none" }}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={addNewItem}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label className="form-label">Priority:</label>
          <select
            className="form-select"
            id="task-priority-select-input"
            aria-label="Priority select"
            value={inputPriorityValue}
            onChange={(e) => {
              setInputPriorityValue(parseInt(e.target.value));
            }}
          >
            <option value="0">None</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </div>
        <div className="col">
          <label className="form-label">Due date:</label>
          <input
            type="date"
            name="task-datetime-input"
            id="task-datetime-input"
            className="form-control"
            value={inputDateValue}
            onChange={(e) => {
              setInputDateValue(e.target.value);
              // setInvalidDate(!isDate(inputDateValue));
            }}
          />
          <span className="text-danger">Invalid date</span>
        </div>
      </div>
    </form>
  );
};

export default TodoListInput;
