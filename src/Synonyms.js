import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    const synonymsString = props.synonyms.join(", ");

    return (
      <div>
        <strong>synonyms: </strong>
        <em>{synonymsString}</em>
      </div>
    );
  } else {
    return null;
  }
}
