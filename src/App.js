import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import PlayButton from "./components/PlayButton";
import ThemeButton from "./components/ThemeButton";

import rainIcon from "./icons/rain.svg";
import waveIcon from "./icons/wave.svg";
import fireIcon from "./icons/fire.svg";

import beachSound from "./sounds/beach-sound.mp3";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "beach",
      audio: new Audio(beachSound),
      isPlaying: false,
    };

    this.handleTheme = this.handleTheme.bind(this);
    this.playPause = this.playPause.bind(this);
  }

  handleTheme(theme) {
    this.setState({
      theme: theme,
    });
  }

  playPause = () => {
    const isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }

    this.setState({ isPlaying: !isPlaying });
  };

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
              : this.state.theme === "fire"
              ? "url(https://images.unsplash.com/photo-1599394021099-0da61a5e1ff2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"
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
              <PlayButton
                playPause={this.playPause}
                isPlaying={this.state.isPlaying}
              />
            </Col>
            <Col>
              <ThemeButton
                icon={waveIcon}
                color="#f0dc6e"
                handleTheme={this.handleTheme}
                theme="beach"
                currentTheme={this.state.theme}
              />
              <ThemeButton
                icon={rainIcon}
                color="lightblue"
                handleTheme={this.handleTheme}
                theme="rain"
                currentTheme={this.state.theme}
              />
              <ThemeButton
                icon={fireIcon}
                color="#e86e56"
                handleTheme={this.handleTheme}
                theme="fire"
                currentTheme={this.state.theme}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
