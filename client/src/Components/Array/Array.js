import React from "react";
import "./Array.css";

const Array = () => {
  const arr = [
    {
      color: "purple",
      type: "minivan",
      registration: "Wed Feb 01 2017 00:00:00 GMT+0100 (GMT+01:00)",
      capacity: 7,
    },
    {
      color: "red",
      type: "station wagon",
      registration: "Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)",
      capacity: 5,
    },
    {
      color: "red",
      type: "station wagon",
      registration: "Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)",
      capacity: 8,
    },
    {
      color: "red",
      type: "station wagon",
      registration: "Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)",
      capacity: 9,
    },
  ];
  return (
    <div>
      <div className="row">
        {arr.map((e) => {
          return (
            <>
              <div className="col-lg-3 col-md-3 col-sm-12 ">
                <div className="inner4arr ">
                  <h1>{e.color}</h1>
                  <h1>{e.type}</h1>
                  <h1>{e.registration}</h1>
                  <h1>{e.capacity}</h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Array;
