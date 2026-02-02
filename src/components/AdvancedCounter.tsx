"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const AdvancedCounter = () => {
  const [count, setCount] = useState(0);

  const plusOne = () => {
    setCount(count + 1);
  };

  const minusOne = () => {
    setCount(count - 1);
  };

  const plusTen = () => {
    setCount(count + 10);
  };

  const minusTen = () => {
    setCount(count - 10);
  };

  return (
    <>
      <div className="text-center text-xl">
        Counter Value: <span className="font-semibold">{count}</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={minusOne}
          size={"lg"}
          variant={"destructive"}>
          <CircleMinusIcon /> Minus 1
        </Button>

        <Button
          onClick={plusOne}
          size={"lg"}
          variant={"outline"}>
          <CirclePlusIcon /> Plus 1
        </Button>

        <Button
          onClick={minusTen}
          size={"lg"}
          variant={"destructive"}>
          <CircleMinusIcon /> Minus 10
        </Button>

        <Button
          onClick={plusTen}
          size={"lg"}
          variant={"outline"}>
          <CirclePlusIcon /> Plus 10
        </Button>
      </div>
    </>
  );
};

export default AdvancedCounter;
