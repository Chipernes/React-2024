import { useState } from 'react';
import { addTask } from '../state';

export function TaskInput() {
  const [inputValue, setInputValue] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      addTask(inputValue, isImportant);
      setInputValue('');
      setIsImportant(false);
    }
  };

  return (
    <div className="mb-4 flex flex-col items-center">
      <input
        type="text"
        value={ inputValue }
        onChange={ (e) => setInputValue(e.target.value) }
        placeholder="Enter a task"
        className="p-2 border rounded w-72 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={ isImportant }
          onChange={ (e) => setIsImportant(e.target.checked) }
          className="mr-2 cursor-pointer"
        />
        Mark as Important
      </label>
      <button
        onClick={ handleAdd }
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md transition"
      >
        Add Task
      </button>
    </div>
  );
}
