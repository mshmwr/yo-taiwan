function keywordSplitWithSymbol(str = "", symbol = "") {
  if (!str) return "";
  return str.split(symbol);
}

export { keywordSplitWithSymbol };
