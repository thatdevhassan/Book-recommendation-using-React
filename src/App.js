import React, { useState } from "react";
import "./styles.css";

// creating out book database

var jsLib = {
  book1: {
    Name: "Eloquent Javascript",
    Author: "Marijn Haverbeke",
    rating: "5/5"
  },

  book2: {
    Name: `JavaScript:The Definitive Guide`,
    Author: "David Flanagan",
    rating: "4.5/5"
  }
};

// main
export default function App() {
  var [book1, setBook1] = useState("");
  var [book2, setBook2] = useState("");

  function clickJs() {
    // resoponse of click
    setBook1(jsLib.book1.Name);
    setBook2(jsLib.book2.Name);
  }
  return (
    // jsx and html
    <div className="App">
      <h2>book recommendation</h2>
      <hr />

      <ul>
        <li onClick={clickJs}>Javascript</li>
      </ul>
      <h1>{book1}</h1>
      <h1>{book2}</h1>
    </div>
  );
}
