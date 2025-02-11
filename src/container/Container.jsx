import "./container.css";
import { useState } from "react";

export default function Container({ setSubmit, rate, setRate }) {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <section className="container">
      <div className="star-div">
        <img
          className="star-img"
          src="../images/icon-star.svg"
          alt="star icon"
        />
      </div>
      <div className="information-div">
        <h1>How did we do?</h1>
        <p className="main-text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="submit-div">
        <div className="rating-div">
          {buttons.map((value) => (
            <button
              onClick={() => setRate(value)}
              key={value}
              className="rating-button"
              style={{
                backgroundColor: rate == value ? "#7C8798" : "",
                color: rate == value ? "white" : "",
              }}>
              {value}
            </button>
          ))}
        </div>
        <button
          onClick={() => rate && setSubmit(true)}
          className="submit-button">
          SUBMIT
        </button>
      </div>
    </section>
  );
}
