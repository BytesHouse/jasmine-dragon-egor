"use client";

import { useState } from "react";
import Minus from "../icons/MinusPlus/Minus";
import Plus from "../icons/MinusPlus/Plus";
// import PlusIcon from "../../../public/assets/Images/Plus.svg";

function Counter({ initialValue, increment, decrement }) {
  const [count, setCount] = useState(initialValue || 1);

  const inc = () => {
    increment();
    setCount((prevCount) => prevCount + 1);
  };

  const dec = () => {
    decrement();
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="counter flex flex-row items-center gap-[5px] _768:order-last">
      <button
        className="minus-button flex cursor-pointer"
        onClick={dec}
        disabled={count == 1}
      >
        <Minus disabled={count == 1} />
      </button>
      <span className="font-semibold text-blue-light p1 px-[10px] text-center">
        {count}
      </span>
      <button className="plus-button flex" onClick={inc}>
        <Plus />
      </button>
    </div>
  );
}

export default Counter;
