import './App.css'
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h1 className="text-2xl mb-4 text-center font-semibold">To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  )
}

export default App
