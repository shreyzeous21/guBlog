"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./contactPage.module.css";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mpwarqrd");

  if (state.succeeded) {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Thank You!</h1>
        <p className={styles.description}>
          Your message has been successfully sent. We`ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Get in Touch</h1>
      <p className={styles.description}>
        Whether you have a question, want to collaborate on a project, or just
        want to say hi, we’d love to hear from you! Feel free to drop us a
        message, and we’ll get back to you as soon as possible.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          className={styles.submitButton}
          type="submit"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
