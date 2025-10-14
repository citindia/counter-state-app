"use client";

import { counterAtom } from "@/lib/atoms";
import { useAtomValue } from "jotai";

const GlobalCounter = () => {
	// const [count, setCount] = useAtom(counterAtom);
	const count = useAtomValue(counterAtom);

	return (
		<div className="text-center text-xl">
			Counter Value: <span className="font-semibold">{count}</span>
		</div>
	);
};

export default GlobalCounter;
