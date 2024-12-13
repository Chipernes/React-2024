import { proxy } from 'valtio';

export type Task = {
  id: number,
  text: string,
  completed: boolean,
  important: boolean,
};

export const state = proxy<{ tasks: Task[]; filterImportant: boolean }>({
  tasks: [],
  filterImportant: false,
});

export const addTask = (text: string, important: boolean = false) => {
  state.tasks.push({ id: Date.now(), text, completed: false, important });
};

export const toggleTask = (id: number) => {
  const task = state.tasks.find((task) => task.id === id);
  if (task) task.completed = !task.completed;
};

export const toggleImportantFilter = () => {
  state.filterImportant = !state.filterImportant;
};

export const deleteTask = (id: number) => {
  state.tasks = state.tasks.filter((task) => task.id !== id);
};
