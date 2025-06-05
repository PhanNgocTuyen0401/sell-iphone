import React, { useState } from "react";
import "./style.scss";
import useNumberStore from "../../store";

const Counter = () => {
  const number = useNumberStore((state) => state.number)
  return (
    <div className="value">
       <p>
        dá chụy huyện toại: <span>{number}</span>
       </p>
    </div>
  );
};

export default Counter;