import React from "react";
import styles from "./menu.module.css";
import MenuCategories from "../menuCategories/MenuCategories";
import Newsletter from "../newsletter/Newsletter";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Stay Updated</h2>
      <Newsletter />
    </div>
  );
};

export default Menu;
