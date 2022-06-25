import React from "react";

const Children2 = (props) => {
  console.log(props.show);
  return (
    <div className="section2">
      {props.show ? (
        props.count.map((ele) => {
          return (
            <div className="section2-application" key={ele}>
              <h1>Sample Text</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
                ratione necessitatibus officia asperiores quia quaerat
                aspernatur est dignissimos corrupti ullam qui sapiente dolorum
                aliquid!
              </p>
            </div>
          );
        })
      ) : (
        <div>Activate show to view the list</div>
      )}
    </div>
  );
};

export default Children2;
