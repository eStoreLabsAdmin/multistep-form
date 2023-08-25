import { Form, Row } from "react-bootstrap";

export function UserPlan() {
  return (
    <>
      <p>user plan</p>
      <Row>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            id="first-name"
            autoComplete="off"
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            id="first-name"
            autoComplete="off"
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            id="first-name"
            autoComplete="off"
          ></Form.Control>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            id="first-name"
            autoComplete="off"
          ></Form.Control>
        </Form.Group>
      </Row>
    </>
  );
}
