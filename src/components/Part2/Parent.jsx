import React, { useState } from "react";
import "../../stylesheets/Part2/Parent.css";
import Children from "./Children";

const Parent = () => {
  const [dark, setdark] = useState(false);

  const tooglemode = () => {
    dark ? setdark(false) : setdark(true);
  };

  const darkmode = (
    <i
      className={
        !dark
          ? "fa-solid fa-moon toogle-active"
          : "fa-solid fa-moon toogle-inactive"
      }
      onClick={tooglemode}
    />
  );

  const lightmode = (
    <i
      className={
        dark
          ? "fa-solid fa-sun toogle-active"
          : "fa-solid fa-sun toogle-inactive"
      }
      onClick={tooglemode}
    />
  );

  return (
    <div className={dark ? "application dark" : "application light"}>
      <div className="buttoncontroller">
        <h1>Website</h1>
        <div className="toogle">
          {darkmode}
          {lightmode}
        </div>
      </div>
      <Children dark tooglemode={tooglemode} />
    </div>
  );
};

export default Parent;
