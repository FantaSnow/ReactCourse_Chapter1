import React, { useState } from 'react';
import '../App.css';

const ToDoTable = ({ toDos, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <ToDoRow
            key={toDo.id}
            toDo={toDo}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

const ToDoRow = ({ toDo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(toDo.title);
  const [error, setError] = useState('');

  const handleEditClick = () => {
    if (isEditing) {
      if (newTitle.trim() === '') {
        setError('Title is required.');
        return;
      }
      setError('');
      onEdit(toDo.id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  return (
    <tr>
      <td>{toDo.id}</td>
      <td>
        {isEditing ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{ borderColor: error ? 'red' : 'black' }}
          />
        ) : (
          toDo.title
        )}
        {error && <span style={{ color: 'red' }}> {error}</span>}
      </td>
      <td>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => onDelete(toDo.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ToDoTable;
