import { useSnapshot } from 'valtio';
import { state } from '../state';
import { TaskItem } from './TaskItem';

export function TaskList() {
  const snap = useSnapshot(state);

  return (
    <ul className="list-none p-0 w-full">
      { snap.tasks.map((task) => (
        <TaskItem key={ task.id } task={ task } />
      )) }
    </ul>
  );
}
