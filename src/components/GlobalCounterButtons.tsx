"use client";

import { counterAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { Button } from "./shadcnui/button";

const GlobalCounterButtons = () => {
  const [count, setCount] = useAtom(counterAtom);

  const plusOne = () => {
    if (count <= 99) {
      setCount(count + 1);
    }
  };

  const minusOne = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const plusTen = () => {
    if (count <= 90) {
      setCount(count + 10);
    }
  };

  const minusTen = () => {
    if (count >= 10) {
      setCount(count - 10);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        onClick={minusOne}
        size={"lg"}
        variant={"destructive"}
        disabled={count <= 0}>
        <CircleMinusIcon /> Minus 1
      </Button>

      <Button
        onClick={plusOne}
        size={"lg"}
        variant={"outline"}
        disabled={count >= 100}>
        <CirclePlusIcon /> Plus 1
      </Button>

      <Button
        onClick={minusTen}
        size={"lg"}
        variant={"destructive"}
        disabled={count < 10}>
        <CircleMinusIcon /> Minus 10
      </Button>

      <Button
        onClick={plusTen}
        size={"lg"}
        variant={"outline"}
        disabled={count > 90}>
        <CirclePlusIcon /> Plus 10
      </Button>
    </div>
  );
};

export default GlobalCounterButtons;
