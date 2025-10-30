import React, { useState } from "react";

const Mood = ({ name }) => {
  const [mood, setMood] = useState("Happy");

  return (
    <>
      <h1>{name} is feeling {mood}</h1>
      <button onClick={() => setMood("Excited")}>Make Excited</button>
      <button onClick={() => setMood("Sleepy")}>Make Sleepy</button> 
    </>
  );
};

export default Mood;
