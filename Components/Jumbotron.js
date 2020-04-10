import { Jumbotron as Jumbo, Container, Row, Col } from "react-bootstrap";

export default function Jumbotron() {
  return (
    <Jumbo fluid className="jumbo">
      <Container>
        <Row className="JumboText-Margin">
          <Col md={9}>
            <span className="jumboText">Corona Update!</span>
            <br />
            <span className="jumboText">
              Please stay at home and stop the spread
            </span>
          </Col>
        </Row>
      </Container>
    </Jumbo>
  );
}
