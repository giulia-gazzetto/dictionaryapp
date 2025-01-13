import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className=" Meanings section">
      <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>
      <p>
        <strong className="definition">Definition: </strong>
        {props.meaning.definition}
        <Example example={props.meaning.example} />

        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
