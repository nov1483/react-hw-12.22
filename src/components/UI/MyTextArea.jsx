import React from "react";
import classes from "../styles/myTextArea.module.css";

class MyTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.myLabel = props.label;
  }

  render(){
    return(
      <div className={classes.areaContainer}>
        <label> {this.myLabel}</label>
        <textarea className={classes.myTextArea} rows = {7} maxLength = {504} {...this.props}/> 
      </div>
    )
  }
}

export default MyTextArea;