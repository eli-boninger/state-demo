export const TextOption = (props) => {
  const { option, updateSelectedWord, updateSelectedColor } = props;
  const { text, colors } = option;

  return (
    <div className="option">
      <button onClick={() => updateSelectedWord(text)}>{text}</button>
      <div className="option__colors">
        <button onClick={() => updateSelectedColor(colors[0])}>
          {colors[0]}
        </button>
        <button onClick={() => updateSelectedColor(colors[1])}>
          {colors[1]}
        </button>
      </div>
    </div>
  );
};
