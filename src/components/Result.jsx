import "../index.css";

export default function Result({ rate }) {
  return (
    <section className="container ty-container">
      <div className="result-div">
        <img
          className="thank-you-image"
          src="/images/illustration-thank-you.svg"
          alt="image"
        />
        <div className="rate-text">
          <p className="user-chosen-text">You selected {rate} out of 5</p>
        </div>
      </div>
      <div className="text-div">
        <h1>Thank you!</h1>
        <p className="main-text thank-you-text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </section>
  );
}
