import { useState, useEffect } from "react";
import Task from "./components/Task/Task";
import TaskCreate from "./components/TaskCreate/TaskCreate";
import "./App.css";

interface TaskType {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const handleCreateTask = (title: string, content: string) => {
    const newTask = {
      id: Date.now(),
      title,
      content,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="container">
        <TaskCreate onCreateTask={handleCreateTask} />
        <div className="tasks-list">
          {tasks.map((task) => (
            <Task key={task.id} title={task.title} content={task.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
