import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😍": "love",
  "😂": "face with tear of joy",
  "🙁": "sad",
  "😴": "sleeping face",
  "🤔": "thinking",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "😑": "annoyance"
};
var emoji = Object.keys(emojiDictionary);

export default function App() {
  const [userInput, setuserinput] = useState("");
  const [meaning, setMeaning] = useState("Meaning will appear here..");
  function emojiInputHandler(event) {
    var useremojiInput = event.target.value;
    var meaning = emojiDictionary[useremojiInput];
    setuserinput(useremojiInput);

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var useremojiInput = emoji;
    setuserinput(useremojiInput);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside Outtt</h1>
      <input onChange={emojiInputHandler}></input>

      <div className="outputmsg">{userInput}</div>
      <h2>{meaning}</h2>
      <h2>
        {emoji.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{ padding: "1rem", cursor: "pointer" }}
            >
              {" "}
              {emoji}
              {""}
            </span>
          );
        })}
      </h2>
    </div>
  );
}
