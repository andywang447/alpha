import React, { useState } from "react";
import axios from "axios";

const ChatGPTComponent = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const sendQuestion = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "davinci-002",
          prompt: question,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_VARIABLE_OPEN_AI_API_KEY}`,
          },
        },
      );

      setResponse(response.data.choices[0].text.trim());
    } catch (error) {
      console.error("Error:", error);
      setResponse(error.message);
    }
  };

  return (
    <div>
      <h1>ChatGPT Q&A</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here"
      />
      <button onClick={sendQuestion}>Send</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatGPTComponent;
