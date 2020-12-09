import React from "react";
import pageNotFoundImage from "../images/PageNotFound.jpg";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={pageNotFoundImage}
          alt="404 - Page Not Found"
          className={styles.image}
        />
      </div>
    </div>
  );
};
export default PageNotFound;
