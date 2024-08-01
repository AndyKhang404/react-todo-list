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
  // const [invalidDate, setInvalidDate] = useState(false);
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
    <form className="my-3 border rounded bg-body-tertiary p-3">
      <label className="form-label">What do you want to do?</label>
      <div className="input-group px-3">
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
        />
      </div>
      <label className="form-label">Due date (optional):</label>
      <div className="input-group px-3">
        {/* <select
          className="form-select"
          id="task-priority-select-input"
          aria-label="Priority select"
        >
          <option selected>Priority...</option>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select> */}
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
        {/* {invalidDate && <span>Invalid date!</span>} */}
        <button type="button" className="btn btn-primary" onClick={addNewItem}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </form>
  );
};

export default TodoListInput;
