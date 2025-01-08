import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <em>{props.meaning.definition}</em>
      </p>
    </div>
  );
}
