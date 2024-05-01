export const SelectedWord = (props) => {
  const { word } = props;

  return (
    <h3>
      The selected word is <span className="selected-word">{word}</span>
    </h3>
  );
};
