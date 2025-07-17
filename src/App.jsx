import { useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Completed task',
      completed: false,
    },
    {
      id: 2,
      title: 'Active task',
      completed: false,
    },
    {
      id: 3,
      title: 'Active task',
      completed: false,
    },
  ]);

  function checkTask(isChecked, id) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: isChecked };
        } else {
          return task;
        }
      });
    });
  }

  function deleteTask(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return task.id !== id;
      });
    });
  }

  function addEditedTask(newTask, id) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title: newTask };
        } else {
          return task;
        }
      });
    });
  }
  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList tasks={tasks} onCheckTask={checkTask} onDeleteTask={deleteTask} onEditTask={addEditedTask} />
        <Footer />
      </section>
    </section>
  );
}

export default App;
