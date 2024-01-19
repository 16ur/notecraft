import React from "react";
import "/src/App.css";
import myLogo from "../images/notecraft-rm.png";

function clickMe() {
  window.location.href = "/App";
}

function Lobby() {
  return (
    <div className="Lobby">
      <div className="header">
        <img src={myLogo} alt="logo" height="60" />
      </div>

      <div className="welcomeUser" style={{ marginTop: "10px" }}>
        <h1>
          Transform concepts,{" "}
          <span className="underline">craft your world.</span>
        </h1>
        <div className="buttonNotes" style={{ marginTop: "-10px" }}>
          <button onClick={clickMe}>Take Notes!</button>
        </div>
      </div>
    </div>
  );
}

export default Lobby;
