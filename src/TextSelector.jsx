import { SelectedWord } from "./SelectedWord";
import { TextOption } from "./TextOption";
import { useState } from "react";

export const TextSelector = () => {
  const [selectedWord, setSelectedWord] = useState("broccoli");
  const possibleWords = ["broccoli", "sizzle", "charu"];

  return (
    <div>
      <SelectedWord word={selectedWord} />
      <div>
        {possibleWords.map((word) => (
          <TextOption
            option={word}
            updateSelected={() => setSelectedWord(word)}
            key={word}
          />
        ))}
      </div>
    </div>
  );
};
