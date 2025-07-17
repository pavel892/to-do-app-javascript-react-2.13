import Task from './../Task/Task';
import './TaskList.css';

export default function TaskList({ tasks, onCheckTask, onDeleteTask, onEditTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            isCompleted={task.completed}
            onCheckTask={onCheckTask}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
            id={task.id}
          />
        );
      })}
    </ul>
  );
}
