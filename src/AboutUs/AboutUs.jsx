import React from "react";
import styles from "./AboutUs.module.css";
import aboutUs from "../images/about-us.jpg";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsSection}>
      <div className={styles.imageSection}>
        <img src={aboutUs} alt="About Us" className={styles.image} />
      </div>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUsHeading}>
          <h1>About Us</h1>
        </div>
        <p>
          Welcome to our Travelers website! We are here to serve you and guide
          you for your next vacation trip.{" "}
        </p>
        <p>Thinking to go out with kids this holiday season?</p>
        <p>Looking for a place which is so famous and most visited in USA?</p>
        <p>Wanna go hiking or just siteseeing?</p>
        <p>
          Then <i>DON'T WORRY!</i> We help you choose a location that is best in
          the season and fits your choice!{" "}
        </p>
        <p className={styles.note}>
          <u>Disclaimer</u>: This website is created as a part of final project
          work for INFO 6150 Web Design and User Experience course taught by
          Prof. April Bingham. All the content and images shown on the website
          are captured from the internet.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
/*<div className={styles.aboutUs}>
        <div>
          <h1>Travelers - All About Us</h1>
        </div>
        <p>
          Welcome to our Travelers website! We are here to serve you and guide
          you for your next vacation trip.{" "}
        </p>
        <p>Thinking to go out with kids this holiday season?</p>
        <p>Looking for a place which is so famous and most visited in USA?</p>
        <p>Wanna go hiking or just siteseeing?</p>
        <p>
          Then <i>DON'T WORRY!</i> We help you choose a location that is best in
          the season and fits your choice!{" "}
        </p>
        <p className={styles.note}>
          <u>Disclaimer</u>: This website is created as a part of final project
          work for INFO 6150 Web Design and User Experience course taught by
          Prof. April Bingham. All the content and images shown on the website
          are captured from the internet.
        </p>
      </div>*/

/*
      <div className={styles.container}>
      <img src={image} alt="About us" className={styles.image} />
      <div className={styles.aboutUs}>
        <h3>Travelers - All About Us</h3>
        <p>Welcome to our Travelers website! We are here to serve you.</p>
        <p>
          Thinking to go out with kids this holiday season? <br /> Looking for a
          place which is so famous and most visited in USA? <br /> Then
          <i> DON'T WORRY! </i> We help you choose a location that is best in
          the season and fits your choice!{" "}
        </p>
        <p className={styles.note}>
          <u>Disclaimer</u>: This website is created as a part of INFO 6150 Web
          Design and User Experience course taught by Prof. April Bingham. All
          the content and images shown on the website are captured from the
          internet.
        </p>
      </div>
    </div>*/
