import { useSnapshot } from 'valtio';
import { state } from '../state';
import { TaskItem } from './TaskItem';

export function TaskList() {
  const snap = useSnapshot(state);

  const tasksToShow = snap.filterImportant
    ? snap.tasks.filter((task) => task.important)
    : snap.tasks;

  if (tasksToShow.length === 0) {
    return <p className="text-center text-gray-500">No tasks available.</p>;
  }

  return (
    <ul className="list-none p-0 w-full">
      { tasksToShow.map((task) => (
        <TaskItem key={ task.id } task={ task } />
      )) }
    </ul>
  );
}
