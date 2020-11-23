import React from "react";
import styles from "./Categories.module.css";

const Categories = function () {
  return (
    <div>
      <nav className={styles.categories}>
        <div>Home</div>
        <div>Travel by Season</div>
        <div>Best fit for</div>
        <div>About Us</div>
      </nav>
    </div>
  );
};

export default Categories;
