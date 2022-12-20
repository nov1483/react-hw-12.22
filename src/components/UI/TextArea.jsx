import React from "react";
import classes from "../styles/textArea.module.css";

const TextArea = (props) => {
  return (
    <div className={classes.areaContainer}>
      <label> {props.label}</label>
      <textarea
        className={classes.myTextArea}
        rows={7}
        {...props}
      />
    </div>
  );
};

export default TextArea;
