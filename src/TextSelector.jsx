import { TextOption } from "./TextOption";

export const TextSelector = () => {
  const [selectedWord, setSelectedWord] = useState("word 1");
  const possibleWords = ["word 1", "word 2", "charu"];

  return (
    <>
      <h3>The selected word is {selectedWord}</h3>
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
