import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const deleteCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="app">
      <h1>To Do List</h1>
      
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span 
              className="checkbox" 
              onClick={() => toggleTask(index)}
            >
              {task.completed ? '☑' : '☐'}
            </span>
            <span 
              className={task.completed ? 'task-text completed' : 'task-text'}
            >
              {task.text}
            </span>
            <button 
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              [X]
            </button>
          </div>
        ))}
      </div>
      
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      
      <button className="delete-completed" onClick={deleteCompleted}>
        Delete Completed
      </button>
    </div>
  );
}

export default App;