import "./App.css";
import ChatGPTComponent from "./components/chatGPT";
import { React, useState, useEffect } from "react";

function App() {
  const [test, setTest] = useState("test");

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTest(data.message);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ChatGPTComponent />
        <p>{test}</p>
      </header>
    </div>
  );
}

export default App;
