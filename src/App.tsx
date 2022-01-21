import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <h1>Using CSS</h1>
        <div className="css-header"></div>
      </section>
      <section>
        <h1>Using img + object-fit/position</h1>
        <img
          src="/scenery-800w.jpg"
          className="improved-header"
          alt="A nice scenery"
        />
      </section>
    </div>
  );
}

export default App;
