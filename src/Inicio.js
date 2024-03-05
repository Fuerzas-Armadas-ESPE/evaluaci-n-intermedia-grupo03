import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Inicio() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1 className="display-4">Bienvenido a la  Gestión de Curso para Docentes</h1>

          <h2 className="display-5">Grupo 03</h2>
          <h3 className="display-6">Cadena Diego</h3>
          <h3 className="display-6">Quishpe Anthony</h3>
          <h3 className="display-6">Tipantiza Nayeli</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;
