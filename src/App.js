import React, { useState } from "react";
import "./styles.css";

// creating out book database

var dataBase = {
  javaScript: [
    { Name: "Eloquent Javascript", Author: "Marijn Haverbeke", Rating: "5/5" },
    {
      Name: "Javascript The Definitive Guide",
      Author: "David Flanagan",
      Rating: "4.5/5"
    }
  ],

  pyLib: [
    {
      Name: "Automate the boring stuff",
      Author: "Al Sweigart",
      Rating: "4.9/5"
    },
    { Name: "Python for beginners", Author: "Eric Matthews", Rating: "4/5" }
  ],

  // CPP : [
  //   {Name: "Automate the boring stuff", Author: "Al Sweigart",Rating: "4.9/5"},
  //   {Name: "Python for beginners", Author: "Eric Matthews", Rating: "4/5" }
  // ],

  cSharp: [
    {
      Name: "C# 8.0 and .NET, Core 3.0",
      Author: "Mark J. Price",
      Rating: "3.9/5"
    },
    {
      Name: "C# 8.0 Pocket Reference",
      Author: "Joseph Albahari",
      Rating: "4.9/5"
    }
  ]
};

// main
export default function App() {
  const [selectedGenre, setGenre] = useState("pyLib");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    // jsx and html
    <div className="App">
      <div class="top">
        <h2>programming books recommendation</h2>
        <h3>These are my top picks</h3>
      </div>

      <div>
        {Object.keys(dataBase).map((genre) => (
          <button class="bookbtn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div>
        <ul>
          {dataBase[selectedGenre].map((book) => (
            <li class="mainlist" key={book.name}>
              {" "}
              <div>Name : '{book.Name}' </div>
              <div>Authour : '{book.Author}' </div>
              <div>Rating: '{book.Rating}'</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
