import { React, useState } from "react";
import "../styles/form.css";

const ContactForm = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    message: "",
    cname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateValue = checkValidations();
    if (validateValue)
      alert(
        `Name: ${inputValue.name}, Email: ${inputValue.email}, Message: ${inputValue.message}`
      );
  };

  const reset = () => {
    setInputValue({
      name: "",
      email: "",
      message: "",
      cname: "",
    });
  };

  const checkValidations = () => {
    let letters = /^[a-zA-Z\s]*$/;

    const name = inputValue.name.trim();
    const email = inputValue.email.trim();
    const companyName = inputValue.cname.trim();
    const message = inputValue.message.trim();

    if (name === "" || email === "" || message === "" || companyName === "") {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";

      document.querySelector(".email-error").classList.add("error");
      document.querySelector(".email-error").innerText =
        "Please fill out this field!";

      document.querySelector(".company-error").classList.add("error");
      document.querySelector(".company-error").innerText =
        "Please fill out this field!";

      document.querySelector(".msg-error").classList.add("error");
      document.querySelector(".msg-error").innerText =
        "Please fill out this field!";
    } else if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText = "Don't enter Numbers";
    } else if (!letters.test(companyName)) {
      document.querySelector(".company-error").classList.add("error");
      document.querySelector(".company-error").innerText =
        "Don't enter Numbers";
    } else {
      document.querySelector(".msg-error").classList.remove("error");
      document.querySelector(".msg-error").innerText = "";

      document.querySelector(".name-error").classList.remove("error");
      document.querySelector(".name-error").innerText = "";

      document.querySelector(".email-error").classList.remove("error");
      document.querySelector(".email-error").innerText = "";

      document.querySelector(".company-error").classList.remove("error");
      document.querySelector(".company-error").innerText = "";

      return true;
    }
    return false;
  };

  return (
    <div className="contain p-4">
      <div className="form">
        <h4>I'm always open to discuss</h4>
        <h2 className="form-headline pb-3">Send me a message</h2>
        <form id="submit-form" onSubmit={handleSubmit}>
          <p>
            <input
              id="name"
              name="name"
              className="form-input"
              type="text"
              value={inputValue?.name}
              onChange={handleChange}
              placeholder="Your Name*"
            />
            <small className="name-error"></small>
          </p>
          <p>
            <input
              id="email"
              name="email"
              className="form-input"
              value={inputValue?.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email*"
            />
            <small className="email-error"></small>
          </p>
          <p className="full-width">
            <input
              id="company-name"
              name="cname"
              className="form-input"
              type="text"
              placeholder="Company Name*"
              value={inputValue?.cname}
              onChange={handleChange}
              required
            />
            <small className="company-error"></small>
          </p>
          <p className="full-width">
            <textarea
              minLength="20"
              id="message"
              name="message"
              cols="30"
              rows="7"
              placeholder="Your Message*"
              value={inputValue?.message}
              onChange={handleChange}
              required
            ></textarea>
            <small className="msg-error"></small>
          </p>

          <p className="full-width">
            <input
              type="submit"
              className="submit-btn"
              value="Submit"
              onClick={checkValidations}
            />
            <button className="reset-btn" onClick={reset}>
              Reset
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
