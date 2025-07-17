import { useState } from 'react';
import './Task.css';

export default function Task({ id, title, isCompleted, onCheckTask, onDeleteTask, onEditTask }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState('');

  function handleChange(e) {
    const newCheck = e.target.checked;
    setIsChecked(newCheck);
    onCheckTask(newCheck, id);
  }

  function handleDeleteClick() {
    onDeleteTask(id);
  }

  function handleEditingClick() {
    setIsEditing(!isEditing);
  }

  function handleEditingChange(e) {
    setEditedTask(e.target.value);
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      onEditTask(editedTask, id);
      setIsEditing(false);
    }
  }

  return (
    <li className={`${isCompleted ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={isChecked} onChange={handleChange} />
        <label>
          <span className="description">{title}</span>
          <span className="created">created 5 min ago</span>
        </label>
        <button onClick={handleEditingClick} className="icon icon-edit"></button>
        <button onClick={handleDeleteClick} className="icon icon-destroy"></button>
      </div>
      <input type="text" className="edit" onKeyDown={handleEnter} value={editedTask} onChange={handleEditingChange} />
    </li>
  );
}
