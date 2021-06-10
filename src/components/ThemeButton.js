import { Component } from "react";

class ThemeButton extends Component {
  render() {
    return (
      <div className="theme-button">
        <img
          src={this.props.icon}
          style={{ backgroundColor: this.props.color }}
        />
      </div>
    );
  }
}

export default ThemeButton;
