import React from 'react';
import { Card } from 'react-bootstrap';

const TodoList = () => {
  // Aquí luego vas a renderizar tareas dinámicamente
  return (
    <div className="todo-list">
      {[1, 2, 3].map((item) => (
        <Card key={item} className="goal-card mb-3">
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              <strong>Description:</strong> Description example.<br />
              <strong>Due Date:</strong> 2025-05-01
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
