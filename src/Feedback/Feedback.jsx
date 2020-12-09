import React, { useState } from "react";
import styles from "./Feedback.module.css";
import feedbackImage from "../images/feedback.png";
import { Link } from "react-router-dom";

const Feedback = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  }

  return (
    <div>
      {submittedForm ? (
        <div>
          <p>
            Thank you for filling the form, here are the details that you filled
            in:
          </p>
          <div className={styles.submittedDetails}>
            Full name: <i>{submittedForm.get("name")}</i> <br />
            Email address: <i>{submittedForm.get("email")}</i> <br />
            Phone number: <i>{submittedForm.get("phoneNumber")}</i> <br />
            Gender: <i>{submittedForm.get("gender")}</i> <br />
            Feedback: <i>{submittedForm.get("feedback")}</i> <br />
          </div>
          <div>
            <Link to="/thankyou">
              <button type="button" className={styles.okButton}>
                OK
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className={styles.feedbackForm}>
            <div className={styles.imageSection}>
              <img
                src={feedbackImage}
                alt="Feedback form"
                className={styles.image}
              />
            </div>
            <div className={styles.actualForm}>
              <div className={styles.formHeadingSection}>
                <h1>Write to Us</h1>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  id="nameId"
                  placeholder="Full name (required)"
                  className={styles.inputField}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="emailId"
                  placeholder="Email address, example: xyz@test.com (required)"
                  className={styles.inputField}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneId"
                  placeholder="Phone number, example: (987)-654-3210 (required)"
                  className={styles.inputField}
                  required
                />
              </div>
              <div>
                <select
                  name="gender"
                  id="genderDropdown"
                  className={styles.genderDropdown}
                >
                  <option disabled selected value>
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Don't Want To Answer">
                    Don't want to answer
                  </option>
                </select>
              </div>

              <div>
                <textarea
                  name="feedback"
                  id="messageId"
                  placeholder="Your feedback here.. (required)"
                  className={styles.messageTextField}
                  maxlength="1000"
                  required
                />
              </div>
              <div>
                <input type="submit" value="Submit" className={styles.submit} />
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Feedback;
