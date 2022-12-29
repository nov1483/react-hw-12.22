import React from "react";
import classes from "../styles/modal.module.css";
import Button from "../UI/Button";

const Modal = (props) => {
    return (
      <div className={classes.modalWrapper}>
        <div className={classes.modalActive}>
          <h1>
            {props.userName} {props.userLastName} Form Data :
          </h1>
          <div className={classes.modalData}>
            <p>Birthday - {props.userDate}</p>
            <p>Phone Number - {props.userPhone}</p>
            <p>Web-Site - {props.userSite}</p>
            <p>
              About {props.userName} - {props.userAbout}
            </p>
            <p>Technologies stack - {props.userStack}</p>
            <p>Last project - {props.userProject}</p>
            <Button onClick={() => props.active()}>Got It!</Button>
          </div>
        </div>
      </div>
    );
  }

export default Modal;
