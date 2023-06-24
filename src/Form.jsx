import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false)

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true)
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="form-block" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Success! Thank you</div>
        ) : null}

        <input
          disabled={submitted}
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          name="firstName"
          placeholder="First Name"
        />
        {submitted && !values.firstName ? (
          <span>Please enter a Firstname</span>
        ) : null}
        <input
          disabled={submitted}
          onChange={handleLastNameInputChange}
          value={values.lastName}
          name="lastName"
          placeholder="Last Name"
        />
        {submitted && !values.lastName ? (
          <span>Please enter a Lastname</span>
        ) : null}

        <input
          disabled={submitted}
          onChange={handleEmailInputChange}
          value={values.email}
          name="email"
          placeholder="E-mail"
        />
        {submitted && !values.email ? (
          <span>Please enter an email address</span>
        ) : null}

        <button className="button-submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
