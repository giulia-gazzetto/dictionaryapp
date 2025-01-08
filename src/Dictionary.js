import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "aca2a4of530d0tf79751324ac6b3f501";

    // documentation https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>

      <Result result={result} />
    </div>
  );
}
