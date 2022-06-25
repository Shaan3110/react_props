import React, { useState } from "react";
import "../../stylesheets/Part3/Parent.css";
import Children1 from "./Children1";
import Children2 from "./Children2";

const Parent = () => {
  const [show, setshow] = useState(true);
  const [count, setcount] = useState([1]);

  const toogle = () => {
    show ? setshow(false) : setshow(true);
  };

  const maintaincount = (event) => {
    event.target.id === "add"
      ? setcount([...count, count[count.length] + 1])
      : setcount(count.slice(0, -1));
  };

  return (
    <div className="application-container">
      <div className="header">
        <button onClick={maintaincount} id="add">
          Add
        </button>
        <button onClick={maintaincount} id="delete">
          Delete
        </button>
      </div>
      <div className="section-application">
        <Children1 show toogle={toogle} />
        <Children2 count={count} show />
      </div>
    </div>
  );
};

export default Parent;
