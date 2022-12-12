import React from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
import classes from "../styles/myForm.module.css";

class MyForm extends React.Component {
  myInputKeys = [
    {label : 'Name', placeholder : 'Jhon', type : 'text'},
    {label : 'Last Name', placeholder : 'Doe', type : 'text'},
    {label : 'Birthday', type : 'date'},
    {label : 'Phone', placeholder : '+11 111-111-111', type : 'tel'},
    {label : 'Site', placeholder : 'www.example.com', type : 'text'}
  ];
  myTextAreaKeys = [
    {label : 'About You', placeholder : 'Write a few words about you'},
    {label : 'Technologies Stack', placeholder : 'Write your technologies stack'},
    {label : 'Description of your last project', placeholder : 'Write a few word about your last project'}
  ];

  render() {
    return(
      <div className={classes.formWrapper}>
      <h1>Form Create</h1>
      <form>
        {this.myInputKeys.map(el => {
          return (
            <MyInput key={el.label} type = {el.type} label = {el.label} placeholder = {el.placeholder}/>
          )
        })}
        {this.myTextAreaKeys.map(el => {
          return (
            <MyTextArea key={el.label} label = {el.label} placeholder = {el.placeholder}/>
          )
        })}
        <div className={classes.btnWrapper}>
          <MyButton>Cancel</MyButton>
          <MyButton>Save</MyButton>
        </div> 
      </form>
    </div>
  )
  }
}

export default MyForm