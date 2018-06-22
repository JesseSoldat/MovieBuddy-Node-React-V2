const truncateText = (text, amount) =>
  text.length >= amount ? text.slice(0, amount) + "..." : text;

export default truncateText;
