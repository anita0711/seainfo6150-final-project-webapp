import React from "react";
import styles from "./Categories.module.css";

const Categories = function () {
  return (
    <ul className={styles.categories}>
      <li>Home</li>
      <li>All Places</li>
      <li>Travel by Season</li>
      <li>Best fit for</li>
      <li>About Us</li>
    </ul>
  );
};

export default Categories;
