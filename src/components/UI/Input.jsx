import React from "react";
import classes from "../styles/input.module.css";

class Input extends React.Component {
  render() {
    return (
      <div className={classes.inputContainer}>
        <label>{this.props.label}</label>
        <input className={classes.myInput} {...this.props} />
      </div>
    );
  }
}

export default Input;
