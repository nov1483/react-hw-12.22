import React from "react";
import classes from '../styles/myInput.module.css';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.myLabel = props.label;
  }
  render(){
    return(
      <div className={classes.inputContainer}>
        <label>{this.myLabel}</label>
        <input className={classes.myInput} {...this.props}/> 
      </div>
    )
  }
}

export default MyInput;