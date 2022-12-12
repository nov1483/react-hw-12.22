import React from "react";
import classes from '../styles/myButton.module.css';

class MyButton extends React.Component {

  render(){
    return(
      <button className={classes.myButton}>{this.props.children}</button>
    )
  }
}

export default MyButton;