import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section className="section">
          <h2 className="mainWord text-capitalize">{props.result.word}</h2>
          <p className="phonetic">/{props.result.phonetic}/</p>
        </section>
        <div>
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
