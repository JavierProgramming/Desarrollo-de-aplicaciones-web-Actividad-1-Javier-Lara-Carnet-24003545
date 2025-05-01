// src/features/tasks/TaskList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from './tasksSlice';
import { Button, Form, Card } from 'react-bootstrap';

const TaskList = () => {
  const [taskInput, setTaskInput] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (taskInput.trim() !== '') {
      dispatch(addTask(taskInput));
      setTaskInput('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">To Do List</h3>
      <Form.Control
        type="text"
        placeholder="Enter task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="mb-2"
      />
      <Button onClick={handleAdd} variant="primary">Add Task</Button>
      <div className="mt-4">
        {tasks.map(task => (
          <Card key={task.id} className="mb-2 p-2">
            <div className="d-flex justify-content-between align-items-center">
              <span>{task.text}</span>
              <Button variant="danger" size="sm" onClick={() => handleDelete(task.id)}>Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
