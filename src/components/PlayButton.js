import { Component } from "react";
import playIcon from "../icons/play.svg";

class PlayButton extends Component {
  render() {
    return (
      <div className="play-button">
        <img alt="play" src={playIcon} />
      </div>
    );
  }
}

export default PlayButton;
