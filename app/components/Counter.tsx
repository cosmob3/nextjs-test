"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-evenly">
      <p>You clicked {count} times</p>

      <button
        className="font-extrabold btn btn-soft"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
