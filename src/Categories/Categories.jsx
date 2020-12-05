import React from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories = function () {
  return (
    <ul className={styles.categoriesSection}>
      <li className={styles.category}>
        <Link to="/" className={styles.categoryLink}>
          Home
        </Link>
      </li>
      <li className={styles.category}>
        <Link to="/allPlaces" className={styles.categoryLink}>
          All Places
        </Link>
      </li>
      <li className={styles.category}>
        <Link to="/travelBySeason" className={styles.categoryLink}>
          {" "}
          Travel by Season
        </Link>
      </li>
      <li className={styles.category}>
        <Link to="/bestFitFor" className={styles.categoryLink}>
          {" "}
          Best fit for
        </Link>
      </li>
      <li className={styles.category}>
        <Link to="/aboutUs" className={styles.categoryLink}>
          About Us
        </Link>
      </li>
    </ul>
  );
};

export default Categories;
