import './App.css';
import { state } from './state';
import { useSnapshot } from 'valtio';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { useTheme } from './components/ThemeProvider';

function App() {
  const snap = useSnapshot(state);
  const { theme, toggleTheme } = useTheme();

  const toggleFilter = () => {
    state.filterImportant = !snap.filterImportant;
  };

  return (
    <div
      className={ `min-h-screen flex items-center justify-center ${
        theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
      }` }
    >
      <div
        className={ `p-6 rounded shadow-lg w-96 ${
          theme === 'light' ? 'bg-white text-black' : 'bg-gray-900'
        }` }
      >
        <h1 className={ `text-2xl mb-4 text-center font-semibold ${
          theme === 'light' ? 'text-black' : 'text-white'
        }` }
        >
          To-Do List
        </h1>
        <button
          onClick={ toggleTheme }
          className="p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md transition"
        >
          Toggle Theme
        </button>
        <div className="flex justify-between mb-4">
          <button
            onClick={ toggleFilter }
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

export default App;
