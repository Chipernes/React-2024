import './App.css'
import { state, toggleImportantFilter } from './state';
import { useSnapshot } from 'valtio';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';

function App() {
  const snap = useSnapshot(state);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h1 className="text-2xl mb-4 text-center font-semibold">To-Do List</h1>
        <div className="mb-4 flex justify-between">
          <button
            onClick={ toggleImportantFilter }
            className="p-2 bg-green-500 text-white rounded hover:bg-green-600 shadow-md transition"
          >
            { snap.filterImportant ? 'Show All Tasks' : 'Show Important' }
          </button>
        </div>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App
