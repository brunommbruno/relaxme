import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "beach",
    };
  }

  render() {
    return (
      <div
        className="app"
        style={{
          backgroundImage:
            this.state.theme === "beach"
              ? "url(https://wallpaperaccess.com/full/3085648.jpg)"
              : this.state.theme === "rain"
              ? "url(https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
              : null,
          backgroundSize: "100%",
          height: "100vh",
        }}
      >
        <Container>
          <Row>
            <Col>
              <p>timer</p>
            </Col>
            <Col>
              <p>play</p>
            </Col>
            <Col>
              <p>sound choose</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
