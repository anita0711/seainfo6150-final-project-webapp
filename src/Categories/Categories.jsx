import React from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";
import "./Categories.module.css";

const Categories = function () {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.categoryLink}>
        <i className="fa" style={{ color: "white", fontSize: "20px" }}>
          &#xf015;
        </i>
        Home
      </Link>

      <Link to="/allPlaces" className={styles.categoryLink}>
        All Places
      </Link>

      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>
          Travel by Season <i className="fa fa-caret-down"></i>
        </button>
        <div className={styles.dropdownContent}>
          <Link to="/spring" className={styles.subCategoryItem}>
            Spring
          </Link>
          <Link to="/summer" className={styles.subCategoryItem}>
            Summer
          </Link>
          <Link to="/fall" className={styles.subCategoryItem}>
            Fall
          </Link>
          <Link to="/winter" className={styles.subCategoryItem}>
            Winter
          </Link>
        </div>
      </div>

      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>
          Best fit for <i className="fa fa-caret-down"></i>
        </button>
        <div className={styles.dropdownContent}>
          <Link to="/kids" className={styles.subCategoryItem}>
            Kids
          </Link>
          <Link to="/hiking" className={styles.subCategoryItem}>
            Hiking
          </Link>
          <Link to="/scenary" className={styles.subCategoryItem}>
            Scenary
          </Link>
          <Link to="/camping" className={styles.subCategoryItem}>
            Camping
          </Link>
        </div>
      </div>

      <Link to="/aboutUs" className={styles.categoryLink}>
        About Us
      </Link>
    </div>
  );
};

export default Categories;
