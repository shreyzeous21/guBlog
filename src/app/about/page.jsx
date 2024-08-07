import React from "react";
import styles from "./aboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Galgotias Blogs</h1>
      <p className={styles.description}>
        Welcome to Galgotias Blogs, a vibrant and diverse community of writers,
        thinkers, and creators from Galgotias University. Our blog is a platform
        where students, faculty, and alumni come together to share their
        thoughts, ideas, and experiences across a wide range of topics.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Our Mission</h2>
        <p className={styles.text}>
          At Galgotias Blogs, our mission is to foster a space for creative
          expression, intellectual exchange, and personal growth. We believe in
          the power of words to inspire, inform, and connect people. Whether
          you`re passionate about technology, fashion, travel, or lifestyle,
          you`ll find something here that resonates with you.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>What We Offer</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Diverse Content:</strong> From coding tutorials and tech
            news to style guides and travel diaries, our content reflects the
            eclectic interests of our community.
          </li>
          <li className={styles.listItem}>
            <strong>Student Voices:</strong> We feature articles, essays, and
            stories written by students, giving them a platform to showcase
            their talents and perspectives.
          </li>
          <li className={styles.listItem}>
            <strong>Interactive Community:</strong> Engage with our content by
            leaving comments, sharing your thoughts, and connecting with
            like-minded individuals.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Join Us</h2>
        <p className={styles.text}>
          We are always looking for new voices and fresh perspectives. If you
          have a story to tell or an idea to share, we`d love to hear from you.
          Join us in creating a vibrant, dynamic, and inclusive space for
          everyone at Galgotias University.
        </p>
        <p className={styles.text}>
          Thank you for being a part of our community. We hope you enjoy
          reading, exploring, and contributing to Galgotias Blogs as much as we
          enjoy bringing it to you.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
