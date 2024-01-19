import { useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import myLogo from "./images/notecraft-rm.png";

function App() {
  const [input, setInput] = useState("");
  const [fileName, setFileName] = useState("No file included"); // Nouvel état pour le nom du fichier

  const downloadMarkdown = () => {
    const element = document.createElement("a");
    const file = new Blob([input], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName; // Utilise le nom du fichier actuel
    document.body.appendChild(element);
    element.click();
  };

  const importMarkdown = () => {
    const element = document.createElement("input");
    element.type = "file";
    element.accept = ".md";
    element.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = (readerEvent) => {
        setInput(readerEvent.target.result);
        setFileName(file.name); // Met à jour le nom du fichier
      };
    };
    element.click();
  };

  return (
    <div className="App">
      <div className="header">
        <img src={myLogo} alt="logo" height="60" />
      </div>
      <div className="input-container">
        <textarea
          autoFocus
          className="textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ReactMarkdown children={input} className="markdown" />
      </div>

      <div className="file-info">
        <p>Current File: {fileName}</p>
      </div>

      <div className="importButton">
        <button onClick={importMarkdown}> Import (.md)</button>
      </div>
      <div className="myButton">
        <button onClick={downloadMarkdown}>Download (.md)</button>
      </div>

      <div className="backLobby">
        <a href="/">Back to Lobby</a>
      </div>
    </div>
  );
}

const Component = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={docco}>
      {value}
    </SyntaxHighlighter>
  );
};

export default App;
