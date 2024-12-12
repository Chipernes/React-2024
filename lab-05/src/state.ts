import { proxy } from 'valtio';

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export const state = proxy<{ tasks: Task[] }>({
  tasks: [],
});

export const addTask = (text: string) => {
  state.tasks.push({ id: Date.now(), text, completed: false });
};

export const toggleTask = (id: number) => {
  const task = state.tasks.find((task) => task.id === id);
  if (task) task.completed = !task.completed;
};

export const deleteTask = (id: number) => {
  state.tasks = state.tasks.filter((task) => task.id !== id);
};
