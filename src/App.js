import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState();

  function handlePrevious() {
    alert("previous");
  }

  function handleNext() {
    alert("next");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      {messages.map((message, index) => {
        return (
          <p key={index} className="message">
            Step {index + 1}: {message}
          </p>
        );
      })}

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
