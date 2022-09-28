import React, { useState } from "react";

const TextBox = (props) => {
  const [text, setText] = useState("");
  const handleUppercase = () => {
    console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleTextClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleTextSpace = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
  };
  const handleTextCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h2
          className="my-2"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          Enter the text to analize
        </h2>
        <div class="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            Enter the text
          </label>
          <textarea
            value={text}
            className="form-control mb-3"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="exampleFormControlTextarea1"
            rows="5"
            onChange={handleOnChange}
          ></textarea>
          <button onClick={handleUppercase} className="btn btn-primary">
            convert to uppercase
          </button>
          <button
            onClick={handleLowercase}
            style={{ marginLeft: "10px" }}
            className="btn btn-primary ml-1"
          >
            convert to lowercase
          </button>
          <button
            onClick={handleTextClear}
            style={{ marginLeft: "10px" }}
            className="btn btn-primary ml-1"
          >
            Text Clear
          </button>
          <button
            onClick={handleTextSpace}
            style={{ marginLeft: "10px" }}
            className="btn btn-primary ml-1"
          >
            Single Space
          </button>
          <button
            onClick={handleTextCopy}
            style={{ marginLeft: "10px" }}
            className="btn btn-primary ml-1"
          >
            text copy
          </button>
        </div>
      </div>
      <div
        className="container "
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.length === 0 ? 0 : text.split(" ").length} word {text.length}{" "}
          characters
        </p>
        <p> {0.008 * text.split(" ").length}Minute read time</p>
      </div>
    </>
  );
};

export default TextBox;
