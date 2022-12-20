import React from "react";
import classes from "../styles/modal.module.css";
import Button from "../UI/Button";

class Modal extends React.Component {
  render() {
    return (
      <div className={classes.modalWrapper}>
        <div className={classes.modalActive}>
          <h1>
            {this.props.userName} {this.props.userLastName} Form Data :
          </h1>
          <div className={classes.modalData}>
            <p>Birthday - {this.props.userDate}</p>
            <p>Phone Number - {this.props.userPhone}</p>
            <p>Web-Site - {this.props.userSite}</p>
            <p>
              About {this.props.userName} - {this.props.userAbout}
            </p>
            <p>Technologies stack - {this.props.userStack}</p>
            <p>Last project - {this.props.userProject}</p>
            <Button onClick={this.props.active}>Got It!</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
