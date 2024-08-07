import React, { useState } from "react";

const LearningJourney = () => {
  const [tipOfTongue, setTipOfTongue] = useState("");
  const [continueLearning, setContinueLearning] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const userInput = tipOfTongue || continueLearning;
    if (!userInput) return;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Your Learning Journey</h1>
      <input
        type="text"
        value={tipOfTongue}
        onChange={(e) => setTipOfTongue(e.target.value)}
        placeholder="It's on the tip of my tongue..."
        style={{
          width: "80%",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <br />
      <input
        type="text"
        value={continueLearning}
        onChange={(e) => setContinueLearning(e.target.value)}
        placeholder="I'd like to continue my learning journey about..."
        style={{
          width: "80%",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007BFF",
          color: "white",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
      {response && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "left",
            width: "80%",
            margin: "20px auto",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default LearningJourney;
