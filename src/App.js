import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((currentStep) => currentStep + 1);
    }
  }

  return (
    <React.Fragment>
      <button
        className="close"
        onClick={() => {
          setIsOpen((is) => !is);
        }}
      >
        &times;
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message classes">
            Step {step}: {messages[step - 1]}
          </p>

          {/* {messages.map((message, index) => {
        return (
          <p key={index} className="message">
            Step {index + 1}: {message}
          </p>
        );
      })} */}

          <div className="buttons">
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={handlePrevious}
            >
              Previous
            </button> */}
            <Button
              textColor={"#ffffff"}
              bgColor={"#7950f2"}
              onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button
              textColor={"#ffffff"}
              bgColor={"#7950f2"}
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
