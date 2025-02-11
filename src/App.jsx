import { useState } from "react";
import "./App.css";
import Container from "./container/Container";
import Result from "./Result";

function App() {
  const [isSubmitted, setSubmit] = useState(false);
  const [rate, setRate] = useState();

  return (
    <>
      {isSubmitted ? (
        <Result rate={rate} setRate={setRate} />
      ) : (
        <Container rate={rate} setRate={setRate} setSubmit={setSubmit} />
      )}
    </>
  );
}

export default App;
