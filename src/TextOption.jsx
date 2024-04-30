export const TextOption = ({ option, updateSelected }) => {
  return <button onClick={() => updateSelected()}>{option}</button>;
};
