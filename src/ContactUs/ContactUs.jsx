import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactUsSection}>
      <div>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.contactDetails}>
        <p>Should you need any help, please contact us here:</p>
        <i className="fa" style={{ fontSize: "40px" }}>
          &#xf095;
        </i>{" "}
        &nbsp; &nbsp; &nbsp; +1 (123)-456-7890 <br />
        <i className="fa" style={{ fontSize: "40px" }}>
          &#xf0e0;
        </i>{" "}
        &nbsp; &nbsp; &nbsp; <u>help@travelerstest.com</u>
      </div>
    </div>
  );
};
export default ContactUs;
