import React from "react";
import classes from '../styles/input.module.css';

const Input = (props) => {
  return(
    <div className={classes.inputContainer}>
      <label>{props.label}</label>
      <input className={classes.myInput} {...props}/> 
    </div>
  )
}


export default Input;
