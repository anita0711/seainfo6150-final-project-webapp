import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = function () {
  return (
    <ul className={styles.container}>
      <li className={styles.option}>
        <Link to="/careers" className={styles.optionLink}>
          Careers
        </Link>
      </li>
      <li className={styles.option}>
        <Link to="/contactUs" className={styles.optionLink}>
          Contact Us
        </Link>
      </li>
      <li className={styles.option}>
        <Link to="/feedback" className={styles.optionLink}>
          Feedback
        </Link>
      </li>
    </ul>
  );
};

export default Footer;
