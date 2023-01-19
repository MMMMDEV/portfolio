import React from "react";

export default function Contact() {
  return (
    <div className="Contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-text">
        If you have a idea you want to bring to life for your small or hefty
        business submit your contact below and I&apos;ll reach back as soon as
        possible.
      </p>
      <form
        className="form"
        action="https://formsubmit.co/manriqueduran123@gmail.com"
        method="POST"
      >
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Name"
          maxLength={15}
          minLength={2}
          required
        ></input>
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Email"
          required
        ></input>
        <textarea
          className="contact-input contact-textarea"
          type="text"
          name="message"
          placeholder="Message"
          minLength={2}
          maxLength={150}
          required
        ></textarea>
        <button className="contact-submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
