import React from "react";
import illustrator from "../../assets/images/illustrator.svg";

const Children = ({ dark, tooglemode }) => {
  return (
    <div className="section">
      <img src={illustrator} alt="" />
      <div className="sidebar">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          quod cum quibusdam rerum quis repellat consequuntur nesciunt deserunt.
          Voluptates aut eaque sed rerum dolorem alias quia! Quo magni hic odio
          exercitationem ratione.
        </p>
        {dark ? (
          <button
            onClick={tooglemode}
            className="light"
            style={{ border: "2px solid black" }}
          >
            Dark Mode
          </button>
        ) : (
          <button onClick={tooglemode} className="dark">
            Light Mode
          </button>
        )}
      </div>
    </div>
  );
};

export default Children;
