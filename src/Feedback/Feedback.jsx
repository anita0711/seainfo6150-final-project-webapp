import React, { useState } from "react";
import styles from "./Feedback.module.css";
import feedback from "../images/feedback.png";

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
            Thank you for filling the form, here are the details that you
            submitted:
          </p>
          Full name: <i>{submittedForm.get("name")}</i> <br />
          Email address: <i>{submittedForm.get("email")}</i> <br />
          Phone number: <i>{submittedForm.get("phoneNumber")}</i> <br />
          Gender: <i>{submittedForm.get("gender")}</i> <br />
          Feedback: <i>{submittedForm.get("feedback")}</i> <br />
          {submittedForm.get("myDropdown")}
        </div>
      ) : (
        <div className={styles.feedbackForm}>
          <div className={styles.imageSection}>
            <img src={feedback} alt="Feedback form" className={styles.image} />
          </div>
          <form onSubmit={onSubmit} className={styles.actualForm}>
            <div className={styles.formHeadingSection}>
              <h1>Write to Us</h1>
            </div>
            <div>
              <input
                type="text"
                htmlFor="nameId"
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
                htmlFor="emailId"
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
                htmlFor="phoneId"
                name="phoneNumber"
                id="phoneId"
                placeholder="Phone number, example: (987)-654-3210 (required)"
                className={styles.inputField}
                required
              />
            </div>
            <div>
              <select
                htmlFor="gender"
                name="gender"
                id="genderDropdown"
                className={styles.genderDropdown}
              >
                <option disabled selected value>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="dontWantToAnswer">Don't want to answer</option>
              </select>
            </div>

            <div>
              <textarea
                name="message"
                htmlFor="messageId"
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
          </form>
        </div>
      )}
    </div>
  );
};

export default Feedback;
