import React from "react";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import classes from "../styles/form.module.css";
import Modal from "../modal/Modal";

const DEFAULT_STATE = {
  nameFlag: false,
  nameValue: "",
  lastNameFlag: false,
  lastNameValue: "",
  dateValue: "",
  phoneFlag: false,
  phoneValue: "",
  siteFlag: false,
  siteValue: "",
  emptyMessage: "Cannot be empty",
  aboutAreaValue: "",
  aboutAreaFlag: false,
  stackAreaValue: "",
  stackAreaFlag: false,
  projectAreaValue: "",
  projectAreaFlag: false,
  modalActive: false,
  formInvalid: false,
};

class Form extends React.Component {
  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { ...DEFAULT_STATE };
  }
  inputHandler(e) {
    if (
      !this.state.nameFlag &&
      !this.state.lastNameFlag &&
      !this.state.phoneFlag &&
      !this.state.siteFlag &&
      !this.state.aboutAreaFlag &&
      !this.state.stackAreaFlag &&
      !this.state.projectAreaFlag
    ) {
      this.setState({ formInvalid: false });
    }
    switch (e.target.name) {
      case "name":
        this.setState({ nameValue: e.target.value });
        if (e.target.value === "" || !/[A-Z]/.test(e.target.value[0])) {
          this.setState({ nameFlag: true, formInvalid: true });
        } else {
          this.setState({ nameFlag: false });
        }

        break;
      case "lastName":
        this.setState({ lastNameValue: e.target.value });
        if (e.target.value === "" || !/[A-Z]/.test(e.target.value[0])) {
          this.setState({ lastNameFlag: true, formInvalid: true });
        } else {
          this.setState({ lastNameFlag: false });
        }
        break;
      case "phone":
        const mask = e.target.value
          .replace(/\D/g, "")
          .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
        const value = mask
          .slice(1, 5)
          .filter((i) => i !== "")
          .join("-");

        this.setState({ phoneValue: value });
        if (
          e.target.value === "" ||
          !/^((\d[9])[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{9,12}$/.test(
            e.target.value
          )
        ) {
          this.setState({ phoneFlag: true, formInvalid: true });
        } else {
          this.setState({ phoneFlag: false });
        }

        break;
      case "site":
        this.setState({ siteValue: e.target.value });
        if (e.target.value === "" || !/^https?\:\/\//.test(e.target.value)) {
          this.setState({ siteFlag: true, formInvalid: true });
        } else {
          this.setState({ siteFlag: false });
        }
        break;
      case "about":
        this.setState({ aboutAreaValue: e.target.value });
        if (e.target.value.length >= 351 || e.target.value === "") {
          this.setState({ aboutAreaFlag: true, formInvalid: true });
        } else {
          this.setState({ aboutAreaFlag: false });
        }
        break;
      case "stack":
        this.setState({ stackAreaValue: e.target.value });
        if (e.target.value.length > 350 || e.target.value === "") {
          this.setState({ stackAreaFlag: true, formInvalid: true });
        } else {
          this.setState({ stackAreaFlag: false });
        }
        break;
      case "project":
        this.setState({ projectAreaValue: e.target.value });
        if (e.target.value.length > 350 || e.target.value === "") {
          this.setState({ projectAreaFlag: true, formInvalid: true });
        } else {
          this.setState({ projectAreaFlag: false });
        }
        break;
      default:
        break;
    }
  }
  clearAll() {
    this.setState({ ...DEFAULT_STATE });
  }

  handleClear(e) {
    e.preventDefault();
    this.clearAll();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ modalActive: true });
  }

  handleModal() {
    this.setState({ modalActive: false });
    this.clearAll();
  }
  render() {
    const state = { ...this.state };
    return (
      <div className={classes.formWrapper}>
        <h1
          className={
            !state.modalActive ? classes.titleActive : classes.titleDisabled
          }
        >
          Form Create
        </h1>
        <form
          className={
            !state.modalActive ? classes.formActive : classes.formDisabled
          }
          onSubmit={this.handleSubmit}
        >
          {state.nameFlag && state.nameValue === "" ? (
            <div className={classes.errMsg}>{state.emptyMessage}</div>
          ) : state.nameFlag &&
            state.nameValue[0] !== state.nameValue[0].toUpperCase() ? (
            <div className={classes.errMsg}>Must start with big letter</div>
          ) : state.nameFlag && !/^[a-zA-ZА-Яа-я]/.test(state.nameValue) ? (
            <div className={classes.errMsg}>Only letters!</div>
          ) : (
            ""
          )}
          <Input
            name="name"
            value={state.nameValue}
            onBlur={this.inputHandler}
            onChange={this.inputHandler}
            type="text"
            label="Name"
            placeholder="Jhon"
            required
          />
          {state.lastNameFlag && state.lastNameValue === "" ? (
            <div className={classes.errMsg}>{state.emptyMessage}</div>
          ) : state.lastNameFlag &&
            state.lastNameValue[0] !== state.lastNameValue[0].toUpperCase() ? (
            <div className={classes.errMsg}>Must start with big letter</div>
          ) : state.lastNameFlag &&
            !/^[a-zA-ZА-Яа-я]/.test(state.lastNameValue) ? (
            <div className={classes.errMsg}>Only letters!</div>
          ) : (
            ""
          )}
          <Input
            name="lastName"
            value={state.lastNameValue}
            onBlur={this.inputHandler}
            onChange={this.inputHandler}
            type="text"
            label="Last Name"
            placeholder="Doe"
            required
          />
          <Input
            name="birthday"
            value={state.dateValue}
            onChange={(e) => this.setState({ dateValue: e.target.value })}
            type="date"
            label="Birthday"
            required
          />
          {state.phoneFlag && state.phoneValue === "" ? (
            <div className={classes.errMsg}>{state.emptyMessage}</div>
          ) : state.phoneFlag &&
            !/^((\d[9])[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{9,12}$/.test(
              state.phoneValue
            ) ? (
            <div className={classes.errMsg}>
              Incorrect format. Example 7-7777-77-77 or 777777777(max 12
              symbols)
            </div>
          ) : (
            ""
          )}
          <Input
            name="phone"
            value={state.phoneValue}
            onBlur={this.inputHandler}
            onChange={this.inputHandler}
            type="tel"
            label="Phone"
            placeholder="7-7777-77-77"
            maxLength={12}
            required
          />
          {state.siteFlag && state.siteValue === "" ? (
            <div className={classes.errMsg}>{state.emptyMessage}</div>
          ) : state.siteValue !== "" &&
            !/^https?\:\/\//.test(state.siteValue) ? (
            <div className={classes.errMsg}>
              Incorrect format. Example https://stackoverflow.com/
            </div>
          ) : (
            ""
          )}
          <Input
            name="site"
            value={state.siteValue}
            onChange={this.inputHandler}
            onBlur={this.inputHandler}
            type="text"
            label="Site"
            placeholder="https://www.example.com"
            required
          />
          {state.aboutAreaFlag && state.aboutAreaValue === "" ? (
            <div className={classes.errMsg}>{state.emptyMessage}</div>
          ) : (
            ""
          )}
          <TextArea
            onBlur={this.inputHandler}
            onChange={this.inputHandler}
            value={state.aboutAreaValue}
            label="About You"
            name="about"
            placeholder="Write a few words about you"
            required
          />
          {state.aboutAreaValue.length <= 350 ? (
            <div className={classes.lengthHandler}>
              {state.aboutAreaValue.length} / 350
            </div>
          ) : (
            state.aboutAreaValue.length > 350 && (
              <div className={classes.errMsg}>
                You have exceeded the symbols limit(350 max)
              </div>
            )
          )}
          {state.stackAreaFlag && state.stackAreaValue === "" ? (
            <div className={classes.errMsg}>{state.emptyMessage}</div>
          ) : (
            ""
          )}
          <TextArea
            onBlur={this.inputHandler}
            onChange={this.inputHandler}
            value={state.stackAreaValue}
            label="Technologies Stack"
            name="stack"
            placeholder="Write your technologies stack"
            required
          />
          {state.stackAreaValue.length <= 350 ? (
            <div className={classes.lengthHandler}>
              {state.stackAreaValue.length} / 350
            </div>
          ) : (
            state.stackAreaValue.length > 350 && (
              <div className={classes.errMsg}>
                You have exceeded the symbols limit(350 max)
              </div>
            )
          )}
          {state.projectAreaFlag && state.projectAreaFlag === "" ? (
            <div className={classes.errMsg}>{state.emptyMessage}</div>
          ) : (
            ""
          )}
          <TextArea
            onBlur={this.inputHandler}
            onChange={this.inputHandler}
            value={state.projectAreaValue}
            label="Last Project"
            name="project"
            placeholder="Write a few word about your last project"
            required
          />
          {state.projectAreaValue.length <= 350 ? (
            <div className={classes.lengthHandler}>
              {state.projectAreaValue.length} / 350
            </div>
          ) : (
            state.projectAreaValue.length > 350 && (
              <div className={classes.errMsg}>
                You have exceeded the symbols limit(350 max)
              </div>
            )
          )}
          <div className={classes.btnWrapper}>
            <Button onClick={this.handleClear}>Cancel</Button>
            <Button disabled={state.formInvalid}>Save</Button>
          </div>
        </form>
        {state.modalActive && (
          <Modal
            userName={state.nameValue}
            userLastName={state.lastNameValue}
            userDate={state.dateValue}
            userPhone={state.phoneValue}
            userSite={state.siteValue}
            userAbout={state.aboutAreaValue}
            userStack={state.stackAreaValue}
            userProject={state.projectAreaValue}
            active={this.handleModal}
            clear={this.clearAll}
          />
        )}
      </div>
    );
  }
}

export default Form;
