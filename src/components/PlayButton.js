import { Component } from "react";
import playIcon from "../icons/play.svg";
import pauseIcon from "../icons/pause.svg";

class PlayButton extends Component {
  render() {
    return (
      <div className="play-button" onClick={() => this.props.playPause()}>
        <img alt="play" src={!this.props.isPlaying ? playIcon : pauseIcon} />
      </div>
    );
  }
}

export default PlayButton;
