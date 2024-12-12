import { Task, toggleTask, deleteTask } from '../state';

type TaskItemProps = {
  task: Task;
};

export function TaskItem({ task }: TaskItemProps) {
  return (
    <li className="flex items-center mb-2 bg-white p-2 rounded shadow-md">
      <input
        type="checkbox"
        checked={ task.completed }
        onChange={ () => toggleTask(task.id) }
        className="mr-2 cursor-pointer"
      />
      <span className={ `flex-grow ${task.completed ? 'line-through text-gray-500' : '' }`}>{ task.text }</span>
      <button
        onClick={ () => deleteTask(task.id) }
        className="p-1 bg-red-500 text-white rounded hover:bg-red-600 shadow-sm transition"
      >
        Delete
      </button>
    </li>
  );
}