import React from "react";
import thankYou from "../images/thankyou.jpg";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <img src={thankYou} alt="Thank you" className={styles.image} />
    </div>
  );
};

export default ThankYou;
