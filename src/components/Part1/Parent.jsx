import React from "react";
import Children1 from "./Children1";
import Children2 from "./Children2";
import "../../stylesheets/Part1/Parent.css"

const Parent = () => {
  const card = (title) => (
    <div className="card">
      <img
        src="https://i2.wp.com/sleepingshouldbeeasy.com/wp-content/uploads/2019/12/gross-motor-activities-for-1-year-olds-3.jpg"
        alt=""
      />
      <button>{title}</button>
    </div>
  );
  return (
    <>
      <div className="container">
        <h1>Showing childrens</h1>
        <br />
        <div className="cards">
        <Children1 childcard={card("Child1")} />
        <Children2 childcard={card("Child2")} />
        </div>
      </div>
    </>
  );
};

export default Parent;
