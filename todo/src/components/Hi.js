import React from "react";

function Hi(props) {
  function GetName() {
    let username = prompt("What is your name?");
    if (username !== "") {
      alert(`Hi, ${username}!`);
    } else {
      alert("You need to have a name!!");
    }
  }
  return (
    <button className="btn toggle-btn" type="button" onClick={GetName}>
      Press me to greet you!
    </button>
  );
}

export default Hi;
