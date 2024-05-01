export const SelectedWord = (props) => {
  const { word } = props;
  const { text, color } = word;

  console.log(text, color);
  return (
    <h3>
      The selected word is{" "}
      <span className="selected-word" style={{ color: color }}>
        {text}
      </span>
    </h3>
  );
};
