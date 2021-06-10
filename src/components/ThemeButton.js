import { Component } from "react";

class ThemeButton extends Component {
  render() {
    return (
      <div
        className="theme-button"
        onClick={() => this.props.handleTheme(this.props.theme)}
      >
        <img
          src={this.props.icon}
          style={{
            backgroundColor: this.props.color,
            border:
              this.props.currentTheme === this.props.theme
                ? "2px solid grey"
                : "2px solid transparent",
          }}
        />
      </div>
    );
  }
}

export default ThemeButton;
