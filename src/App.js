const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 3;

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
        <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }}>
          Next
        </button>
      </div>
    </div>
  );
}
