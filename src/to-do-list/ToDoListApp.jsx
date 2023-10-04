import { useState } from "react";

let id = 0;

const INITIAL_TASKS = [
  { id: id++, label: "Walk the dog" },
  { id: id++, label: "Water the plants" },
  { id: id++, label: "Wash the dishes" },
];

export default function ToDoListApp() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [newTask, setNewTask] = useState("");

  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input
          aria-label="Add new Task"
          type="text"
          placeholder="Add your task"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <div>
            <button>
                Submit
            </button>
        </div>
      </div>
      <ul>
        {tasks.map(({ id, label }) => (
            <li></li>
        ))}
      </ul>
    </div>
  );
}
