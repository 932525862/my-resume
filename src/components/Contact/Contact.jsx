import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(form.current);
      const userData = {};

      formData.forEach((value, key) => {
        userData[key] = value;
      });

      const response = await fetch("http://localhost:5000/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Form submission successful");
        setDone(true);
        form.current.reset();
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="contact-form" id="contact">
      
      <div className="w-left">
        <div className="awesome">
         
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user" placeholder="Name" />
          <input type="email" name="email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

