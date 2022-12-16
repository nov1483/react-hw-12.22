import React from "react";
import classes from "../styles/button.module.css";

class Button extends React.Component {
  render() {
    return (
      <button className={classes.myButton} {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
