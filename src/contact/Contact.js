import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yht48o5",
        "template_tvrjlc5",
        form.current,
        "RPKODAZdSjwZ-SwUq"
      )
      .then(
        (result) => {
          alert("done");
          form.current.reset();
        },
        (error) => {
          alert(" error : " + error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-section">
      <h1 className="contact-title">
        Contact <span>Me</span>
      </h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-left">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div className="form-right">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
