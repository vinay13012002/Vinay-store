import React from "react";
import { Button } from "./styles/Button";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
// import styled from "styled-components";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    userName: "",
    mail: "",
    Massage: "",
  });
  function handleValues(e) {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  const [holdData, setholdData] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted form");
    // console.log(formData.userName);
    // console.log(formData.mail);
    // console.log(formData.Massage);
    setholdData(formData);

    // emailjs
    //   .sendForm(
    //     "service_f3023or",
    //     "template_fmoa0hi",
    //     form.current,
    //     "PYsbMOKAqt4BUZdPT"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    let dataObj = {
      userName: "",
      mail: "",
      Massage: "",
    };
    setFormData(dataObj);
  }

  return (
    <section className="top-pad text-center ">
      <h2 className="text-center">Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.673683604426!2d77.63988675!3d12.91296465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15902824a3fb%3A0x27f12a8578da8851!2sBlock%2041%20CPWD%20COMPLEX!5e0!3m2!1sen!2sin!4v1705570884241!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <form
          onSubmit={handleSubmit}
          // action="https://formsubmit.co/vinayhskp19@email.com"
          method="POST"
          ref={form}
        >
          <div className="form-group">
            <input
              type="text"
              name="userName"
              autoComplete="off"
              value={formData.userName}
              placeholder="Enter your Name"
              onChange={handleValues}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="mail"
              autoComplete="off"
              value={formData.mail}
              placeholder="Enter your Gmail"
              onChange={handleValues}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Enter your massege"
              name="Massage"
              cols={22}
              onChange={handleValues}
              value={formData.Massage}
            ></textarea>
          </div>
          <Button type="submit">Submit </Button>
        </form>

        <div className="form-values-holder">
          {holdData && <h3>Thanks for submitting {holdData.userName}</h3>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
