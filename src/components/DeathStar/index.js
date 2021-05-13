import React from "react";
import "./style.css";
import background from "./background01.jpeg";

function DeathStar(props) {
  return (
    <div className="deathstar text-center" style={{ backgroundImage: `url(${background})` }}>
      {props.children}
    </div>
  );
}

export default DeathStar;
