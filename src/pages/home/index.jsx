import React, { useState } from "react";
import "./style.scss";
import Counter from "../../conponents/counter";
import useNumberStore from "../../store";

const Home = () => {
    const [inputValue, setInputValue] = useState(0);
    const { increment, decrment, setNumber, updateNumber } = useNumberStore();

    return (
        <div className="container">
            <div className="wrapper">
                <Counter />
                <input
                    className="inp-number"
                    type="text"
                    placeholder="Input number"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <div className="btn-group">
                    <div className="decre" onClick={decrment}>-</div>
                    <div className="incre" onClick={increment}>+</div>
                </div>
                <div className="btn-update" onClick={() => setNumber(inputValue)}>
                    Set number
                </div>
                <div className="btn-update" onClick={() => updateNumber(inputValue)}>
                    Update number
                </div>
            </div>
        </div>
    );
};

export default Home;