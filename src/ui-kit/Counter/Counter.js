"use client";

import { useState } from "react";
import Minus from "../icons/MinusPlus/Minus";
import Plus from "../icons/MinusPlus/Plus";
// import PlusIcon from "../../../public/assets/Images/Plus.svg";

function Counter({ initialValue, increment, decrement, weight }) {
  // const [count, setCount] = useState(initialValue);

  return (
    <div className="counter flex flex-row items-center gap-[5px] _768:order-last w-[330px] _768:w-max">
      <button
        className="minus-button flex cursor-pointer"
        onClick={() => decrement()}
        disabled={initialValue == 1}
      >
        <Minus disabled={initialValue == 1} />
      </button>
      <span className="font-semibold text-blue-light p1 px-[10px] text-center">
        {initialValue} x {weight}
      </span>
      <button className="plus-button flex" onClick={() => increment()}>
        <Plus />
      </button>
    </div>
  );
}

export default Counter;
