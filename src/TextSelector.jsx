import { TextOption } from "./TextOption";
import { useState } from "react";

export const TextSelector = () => {
  const [selectedWord, setSelectedWord] = useState("broccoli");
  const possibleWords = ["broccoli", "sizzle", "charu"];

  return (
    <>
      <h3>
        The selected word is{" "}
        <span className="selected-word">{selectedWord}</span>
      </h3>
      {possibleWords.map((word) => (
        <TextOption
          option={word}
          updateSelected={() => setSelectedWord(word)}
          key={word}
        />
      ))}
    </>
  );
};
