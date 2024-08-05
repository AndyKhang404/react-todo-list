import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "../db";
import { today, isDate } from "../date_helper";
// import "../styles/TodoListInput.css";

// interface TodoListInputProps {
//   onAddItem: (item: TodoListItemType) => void;
// }

const TodoListInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputDateValue, setInputDateValue] = useState(today());
  const [inputPriorityValue, setInputPriorityValue] = useState(0);
  const [status, setStatus] = useState<[number, string]>([0, ""]);
  async function addNewItem() {
    if (inputValue.trim()) {
      if (!isDate(inputDateValue)) {
        setStatus([1, "Invalid date"]);
        setTimeout(() => {
          setStatus([0, ""]);
        }, 2000);
        return;
      }
      try {
        const newItem = {
          name: inputValue,
          taskId: uuidv4(),
          isFinished: 0,
          date: inputDateValue,
          priority: inputPriorityValue,
        };
        await db.tasks.add(newItem);
      } catch (error) {
        setStatus([1, "Failed to add task"]);
        setTimeout(() => {
          setStatus([0, ""]);
        }, 2000);
      }
    }
    setInputValue("");
  }
  return (
    <form className="my-3 border rounded bg-body-tertiary p-3 container">
      <div className="row">
        <label className="form-label">What do you want to do?</label>
        <div className="input-group">
          <textarea
            // type="text"
            className="form-control"
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
        <div className="col-sm-6">
          <label className="form-label">Priority:</label>
          <select
            className="form-select form-select-sm"
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
        <div className="col-sm-6">
          <label className="form-label">Due date:</label>
          <div className="input-group input-group-sm">
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
          </div>
        </div>
      </div>
      {status[0] == 1 && (
        <div className="row px-3 pt-3">
          <div className="border p-2 rounded bg-danger-subtle text-danger border-danger">
            {status[1]}
          </div>
        </div>
      )}
    </form>
  );
};

export default TodoListInput;
