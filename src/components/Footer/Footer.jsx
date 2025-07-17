import './Footer.css';
import './../TasksFilter/TasksFilter';
import TasksFilter from './../TasksFilter/TasksFilter';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TasksFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
