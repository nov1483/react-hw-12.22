import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import Modal from "../modal/Modal";
import classes from "../styles/form.module.css";
import { DEFAULT_STATE } from "../../constans";

const Form = () => {
  const [form, setForm] = useState(DEFAULT_STATE)
  const flags = [
    form.nameFlag,
    form.lastNameFlag,
    form.phoneFlag,
    form.siteFlag,
    form.aboutAreaFlag,
    form.stackAreaFlag,
    form.projectAreaFlag,
  ];
  useEffect(() => {
    if (flags.every((el) => !el)) {
      setForm(state => ({...state, formInvalid: false}))
    }
  }, flags);
  function inputHandler(e) {
    switch (e.target.name) {
      case "name":
        setForm(state => ({...state, nameValue : e.target.value}));
        if (e.target.value === "" || !/[A-Z]/.test(e.target.value[0])) {
          setForm(state => ({...state, nameFlag: true, formInvalid : true}));
        } else {
          setForm(state => ({...state, nameFlag: false}));
        }
        break;
      case "lastName":
        setForm(state => ({...state, lastNameValue : e.target.value}));
        if (e.target.value === "" || !/[A-Z]/.test(e.target.value[0])) {
          setForm(state => ({...state, lastNameFlag: true, formInvalid : true}));
        } else {
          setForm(state => ({...state, lastNameFlag: false}));
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

          setForm(state => ({...state, phoneValue : value}));
        if (
          e.target.value === "" ||
          !/^((\d[9])[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{9,12}$/.test(
            e.target.value
          )
        ) {
          setForm(state => ({...state, phoneFlag: true, formInvalid : true}));
        } else {
          setForm(state => ({...state, phoneFlag: false}));
        }

        break;
      case "site":
        setForm(state => ({...state, siteValue : e.target.value}));
        if (e.target.value === "" || !/^https?\:\/\//.test(e.target.value)) {
          setForm(state => ({...state, siteFlag: true, formInvalid : true}));
        } else {
          setForm(state => ({...state, siteFlag: false}));
        }
        break;
      case "about":
        setForm(state => ({...state, aboutAreaValue : e.target.value}));
        if (e.target.value.length >= 351 || e.target.value === "") {
          setForm(state => ({...state, aboutAreaFlag: true, formInvalid : true}));
        } else {
          setForm(state => ({...state, aboutAreaFlag: false}));
        }
        break;
      case "stack":
        setForm(state => ({...state, stackAreaValue : e.target.value}));
        if (e.target.value.length > 350 || e.target.value === "") {
          setForm(state => ({...state, stackAreaFlag: true, formInvalid : true}));
        } else {
          setForm(state => ({...state, stackAreaFlag: false}));
        }
        break;
      case "project":
        setForm(state => ({...state, projectAreaValue : e.target.value}));
        if (e.target.value.length > 350 || e.target.value === "") {
          setForm(state => ({...state, projectAreaFlag: true, formInvalid : true}));
        } else {
          setForm(state => ({...state, projectAreaFlag: false}));
        }
        break;
      default:
        break;
    }
  }
  const clearAll = () => {
    setForm(DEFAULT_STATE)
  }

  const handleClear = (e) => {
    e.preventDefault();
    clearAll();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(state => ({...state, modalActive: true}));
  }

  const handleModal = () => {
    setForm(state => ({...state, modalActive: false}));
    clearAll();
  }

  return (
    <div className={classes.formWrapper}>
      <h1
        className={!form.modalActive ? classes.titleActive : classes.titleDisabled}
      >
        Form Create
      </h1>
      <form
        className={!form.modalActive ? classes.formActive : classes.formDisabled}
        onSubmit={handleSubmit}
      >
        {form.nameFlag && form.nameValue === "" ? (
          <div className={classes.errMsg}>{form.emptyMessage}</div>
        ) : form.nameFlag && form.nameValue[0] !== form.nameValue[0].toUpperCase() ? (
          <div className={classes.errMsg}>Must start with big letter</div>
        ) : form.nameFlag && !/^[a-zA-ZА-Яа-я]/.test(form.nameValue) ? (
          <div className={classes.errMsg}>Only letters!</div>
        ) : (
          ""
        )}
        <Input
          name="name"
          value={form.nameValue}
          onBlur={inputHandler}
          onChange={inputHandler}
          type="text"
          label="Name"
          placeholder="Jhon"
          required
        />
        {form.lastNameFlag && form.lastNameValue === "" ? (
          <div className={classes.errMsg}>{form.emptyMessage}</div>
        ) : form.lastNameFlag &&
        form.lastNameValue[0] !== form.lastNameValue[0].toUpperCase() ? (
          <div className={classes.errMsg}>Must start with big letter</div>
        ) : form.lastNameFlag && !/^[a-zA-ZА-Яа-я]/.test(form.lastNameValue) ? (
          <div className={classes.errMsg}>Only letters!</div>
        ) : (
          ""
        )}
        <Input
          name="lastName"
          value={form.lastNameValue}
          onBlur={inputHandler}
          onChange={inputHandler}
          type="text"
          label="Last Name"
          placeholder="Doe"
          required
        />
        <Input
          name="birthday"
          value={form.dateValue}
          onChange={(e) => setForm(state => ({...state, dateValue : e.target.value}))}
          type="date"
          label="Birthday"
          required
        />
        {form.phoneFlag && form.phoneValue === "" ? (
          <div className={classes.errMsg}>{form.emptyMessage}</div>
        ) : form.phoneFlag &&
          !/^((\d[9])[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{9,12}$/.test(
            form.phoneValue
          ) ? (
          <div className={classes.errMsg}>
            Incorrect format. Example 7-7777-77-77 or 777777777(max 12 symbols)
          </div>
        ) : (
          ""
        )}
        <Input
          name="phone"
          value={form.phoneValue}
          onBlur={inputHandler}
          onChange={inputHandler}
          type="tel"
          label="Phone"
          placeholder="7-7777-77-77"
          maxLength={12}
          required
        />
        {form.siteFlag && form.siteValue === "" ? (
          <div className={classes.errMsg}>{form.emptyMessage}</div>
        ) : form.siteValue !== "" && !/^https?\:\/\//.test(form.siteValue) ? (
          <div className={classes.errMsg}>
            Incorrect format. Example https://stackoverflow.com/
          </div>
        ) : (
          ""
        )}
        <Input
          name="site"
          value={form.siteValue}
          onChange={inputHandler}
          onBlur={inputHandler}
          type="text"
          label="Site"
          placeholder="https://www.example.com"
          required
        />
        {form.aboutAreaFlag && form.aboutAreaValue === "" ? (
          <div className={classes.errMsg}>{form.emptyMessage}</div>
        ) : (
          ""
        )}
        <TextArea
          onBlur={inputHandler}
          onChange={inputHandler}
          value={form.aboutAreaValue}
          label="About You"
          name="about"
          placeholder="Write a few words about you"
          required
        />
        {form.aboutAreaValue.length <= 350 ? (
          <div className={classes.lengthHandler}>
            {form.aboutAreaValue.length} / 350
          </div>
        ) : (
          form.aboutAreaValue.length > 350 && (
            <div className={classes.errMsg}>
              You have exceeded the symbols limit(350 max)
            </div>
          )
        )}
        {form.stackAreaFlag && form.stackAreaValue === "" ? (
          <div className={classes.errMsg}>{form.emptyMessage}</div>
        ) : (
          ""
        )}
        <TextArea
          onBlur={inputHandler}
          onChange={inputHandler}
          value={form.stackAreaValue}
          label="Technologies Stack"
          name="stack"
          placeholder="Write your technologies stack"
          required
        />
        {form.stackAreaValue.length <= 350 ? (
          <div className={classes.lengthHandler}>
            {form.stackAreaValue.length} / 350
          </div>
        ) : (
          form.stackAreaValue.length > 350 && (
            <div className={classes.errMsg}>
              You have exceeded the symbols limit(350 max)
            </div>
          )
        )}
        {form.projectAreaFlag && form.projectAreaValue === "" ? (
          <div className={classes.errMsg}>{form.emptyMessage}</div>
        ) : (
          ""
        )}
        <TextArea
          onBlur={inputHandler}
          onChange={inputHandler}
          value={form.projectAreaValue}
          label="Last Project"
          name="project"
          placeholder="Write a few word about your last project"
          required
        />
        {form.projectAreaValue.length <= 350 ? (
          <div className={classes.lengthHandler}>
            {form.projectAreaValue.length} / 350
          </div>
        ) : (
          form.projectAreaValue.length > 350 && (
            <div className={classes.errMsg}>
              You have exceeded the symbols limit(350 max)
            </div>
          )
        )}
        <div className={classes.btnWrapper}>
          <Button onClick={handleClear}>Cancel</Button>
          <Button disabled={form.formInvalid}>Save</Button>
        </div>
      </form>
      {form.modalActive && (
        <Modal
          userName={form.nameValue}
          userLastName={form.lastNameValue}
          userDate={form.dateValue}
          userPhone={form.phoneValue}
          userSite={form.siteValue}
          userAbout={form.aboutAreaValue}
          userStack={form.stackAreaValue}
          userProject={form.projectAreaValue}
          active={handleModal}
        />
      )}
    </div>
  );
};

export default Form;