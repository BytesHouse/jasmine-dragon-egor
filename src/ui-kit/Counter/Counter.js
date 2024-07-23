"use client";

import { useState } from "react";
import Minus from "../icons/MinusPlus/Minus";
import Plus from "../icons/MinusPlus/Plus";
// import PlusIcon from "../../../public/assets/Images/Plus.svg";

function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="counter flex flex-row items-center gap-[5px]  ">
      <button className="minus-button flex cursor-pointer" onClick={decrement}>
        <Minus />
      </button>
      <span className="font-semibold text-blue-light p1 px-[10px] text-center">
        {count}
      </span>
      <button className="plus-button flex" onClick={increment}>
        <Plus />
      </button>
    </div>
  );
}

export default Counter;
