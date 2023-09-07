import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiHash } from "react-icons/fi";
import { FiChevronsDown, FiChevronsUp, FiRotateCcw } from "react-icons/fi";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCountByOne = () => {
    setCount(count + 1);
  };

  const decreaseCountByOne = () => {
    setCount(count - 1);
  };

  const increaseCountByTen = () => {
    setCount(count + 10);
  };

  const decreaseCountByTen = () => {
    setCount(count - 10);
  };

  const resetCount = () => {
    setCount(0);
  };

  const setRandomCount = () => {
    setCount(Math.floor(Math.random() * 100) + 1);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      increaseCountByOne();
    } else if (event.key === "ArrowDown") {
      decreaseCountByOne();
    }
  };

  return (
    <div>
        <p>Current value:</p>
        <h1>{count}</h1>
      <button onClick={increaseCountByOne}>
        <FiChevronUp />
      </button>
      <button onClick={increaseCountByTen}>
        <FiChevronsUp />
      </button>
      <button onClick={resetCount}>
        <FiRotateCcw />
      </button>
      <button onClick={setRandomCount}>
        <FiHash />
      </button>
      <button onClick={decreaseCountByTen}>
        <FiChevronsDown />
      </button>
      <button onClick={decreaseCountByOne}>
        <FiChevronDown />
      </button>
      
    </div>
  );
}

export default Counter;
