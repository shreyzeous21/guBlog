"use client";
import React, { useState } from "react";
import styles from "./newsletter.module.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/mpwarqrd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("Subscription successful!");
        setEmail("");
      } else {
        const data = await res.json();
        setStatus(data.error || "Subscription failed.");
      }
    } catch (err) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.newsletter}>
      <h1 className={styles.title}>Subscribe to Our Newsletter</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          Subscribe
        </button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
};

export default Newsletter;
