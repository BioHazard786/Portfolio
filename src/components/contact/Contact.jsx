import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiTelegramLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummymail@gmail.com</h5>
            <a href="mailto:dummymail@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiTelegramLine className="contact__option-icon telegram" />
            <h4>Telegram</h4>
            <h5>CuntSlayer</h5>
            <a href="https://t.me/lulu786" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91639663XXXX</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+916396634239"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
