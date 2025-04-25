import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles/styles.css';

function App() {
  return (
    <Container fluid className="app-container">
      <Row className="main-row">
        <Col xs={12} md={4} className="form-column">
          <TodoForm />
        </Col>
        <Col xs={12} md={8} className="list-column">
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
