"use client";

import { useState } from "react";

export const AlphabetDisplayComponent = () => {
  let [letter, setLetter] = useState("Default");
  return (
    <section>
      <p>{letter}</p>
      <button className="border p-2 m-5" onClick={() => setLetter("A")}>
        A
      </button>
      <button
        className="border p-2 m-5"
        onClick={() => setLetter("B" + letter)}
      >
        B
      </button>
      <button
        className="border p-2 m-5 "
        onClick={() => setLetter("C" + letter)}
      >
        C
      </button>
      <button
        className="border p-2 m-5"
        onClick={() => setLetter("D" + letter)}
      >
        D
      </button>
      <button
        className="border p-2 m-5"
        onClick={() => setLetter("E" + letter)}
      >
        E
      </button>
      <button
        className="border p-2 m-5"
        onClick={() => setLetter("F" + letter)}
      >
        F
      </button>
    </section>
  );
};
