import React from "react";
import "./App.css";
import Todos from "./Todo";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  const styles = {
    shadow: {
      boxShadow: ` 5px 10px 18px #888888 `,
    },
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>todos</h1>
            <Card bg="light" border="light" style={styles.shadow}>
              <Card.Body>
                <Todos></Todos>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
