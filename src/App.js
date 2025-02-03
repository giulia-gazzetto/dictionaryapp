import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Dictionary />
      </div>
      <footer>
        Coded by <a href="https://github.com/giulia-gazzetto">Giulia</a> opens
        sourced on{" "}
        <a href="https://github.com/giulia-gazzetto/dictionaryapp">Github</a>{" "}
        and hosted on{" "}
        <a href="https://dictionaryappbygiulia.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}
