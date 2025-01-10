import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <strong>synonyms: </strong>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return (
              <em>
                <li key={index}> {synonym}</li>
              </em>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
