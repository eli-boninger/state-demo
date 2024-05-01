import { useState } from "react";
import { TextOption } from "./TextOption";
import { SelectedWord } from "./SelectedWord";

export const TextSelector = () => {
  const [selectedWord, setSelectedWord] = useState({
    text: "broccoli",
    color: "blue",
  });
  const possibleWords = [
    { text: "broccoli", colors: ["blue", "orange"] },
    { text: "sizzle", colors: ["green", "yellow"] },
    { text: "charu", colors: ["pink", "purple"] },
  ];

  return (
    <div>
      <SelectedWord word={selectedWord} />
      <div className="options">
        {possibleWords.map((word) => (
          <TextOption
            option={word}
            key={word.text}
            updateSelectedWord={(text) =>
              setSelectedWord({ ...selectedWord, text: text })
            }
            updateSelectedColor={(color) =>
              setSelectedWord({ ...selectedWord, color: color })
            }
          />
        ))}
      </div>
    </div>
  );
};
