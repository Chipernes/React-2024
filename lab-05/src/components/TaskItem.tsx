import { Task, toggleTask, deleteTask, state } from '../state';
import { useState } from "react";

type TaskItemProps = {
  task: Task,
};

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.text);

  const editTask = (id: number, newText: string) => {
    const task = state.tasks.find((task) => task.id === id);
    if (task) task.text = newText;
  };

  const handleEdit = () => {
    editTask(task.id, editValue);
    setIsEditing(false);
  };

  return (
    <li
      className={`flex items-center mb-2 p-2 rounded shadow-md ${
        task.important ? 'bg-orange-200' : 'bg-white'
      }`}
    >
      <input
        type="checkbox"
        checked={ task.completed }
        onChange={ () => toggleTask(task.id) }
        className="mr-2 cursor-pointer h-5 w-5 accent-blue-500 rounded-full border-gray-300 focus:ring focus:ring-blue-300"
      />
      { isEditing ? (
        <input
          type="text"
          value={ editValue }
          onChange={ (e) => setEditValue(e.target.value) }
          className="p-1 border rounded flex-grow mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <span
          className={ `flex-grow ${
            task.completed ? 'line-through text-gray-500' : ''
          }` }
        >
          { task.text }
        </span>
      )}
      { isEditing ? (
        <button
          onClick={ handleEdit }
          className="p-1 bg-green-500 text-white rounded hover:bg-green-600 shadow-sm transition"
        >
          Save
        </button>
      ) : (
        <button
          onClick={ () => setIsEditing(true) }
          className="p-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 shadow-sm transition"
        >
          Edit
        </button>
      )}
      <button
        onClick={ () => deleteTask(task.id) }
        className="p-1 bg-red-500 text-white rounded hover:bg-red-600 shadow-sm transition ml-2"
      >
        Delete
      </button>
    </li>
  );
}
