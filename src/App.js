import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "😉": "Winking",
  "😗": "Kissing",
  "😴": "Sleeping",
  "😟": "Worried"
};

var emojisWeKnow = Object.keys(emojiDict);
export default function App() {
  var [meaning, setMeaning] = useState("");
  var [face, setFace] = useState("");
  function getFaceByMeaning(dict, meaning) {
    return Object.keys(dict).find((face) => dict[face] === meaning);
  }
  function inputEmojiHandler(event) {
    var inputEmoji = event.target.value;
    var meaning = emojiDict[inputEmoji];
    var face = getFaceByMeaning(emojiDict, inputEmoji);
    if (face === undefined) {
      face = "Not in database";
    }
    setFace(face);
    if (meaning === undefined) {
      meaning = "Not in database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emotion Reader</h1>
      <input onChange={inputEmojiHandler} />
      <h2>
        <div id="d1" style={{ backgroundColor: "#aaa" }}>
          {face}
        </div>
        <div id="d2" style={{ backgroundColor: "#a6a" }}>
          {meaning}
        </div>
      </h2>
      <h3>Emojis We Know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", cursor: "pointer", margin: "0.5rem" }}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
