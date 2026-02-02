"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const BasicCounter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="text-center text-xl">
        Counter Value: <span className="font-semibold">{count}</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={minus}
          size={"lg"}
          variant={"destructive"}>
          <CircleMinusIcon /> Minus 1
        </Button>

        <Button
          onClick={plus}
          size={"lg"}
          variant={"outline"}>
          <CirclePlusIcon /> Plus 1
        </Button>
      </div>
    </>
  );
};

export default BasicCounter;
