import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoForm = () => {
  return (
    <div className="todo-form">
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button variant="primary" type="submit" className="add-goal-button">
          Add Goal
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;
