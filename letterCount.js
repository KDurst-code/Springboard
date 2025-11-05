function letterCount(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (typeof word !== "string") {
    console.error("Error");
    return;
  }

  for (const letter of word) {
    if (!alphabet.includes(letter.toLowerCase())) {
      console.error("Error");
      return;
    }
  }

  let letterCounts = {};

  for (let letter of word) {
    let lowerCaseLetter = letter.toLowerCase();
    letterCounts[lowerCaseLetter] = (letterCounts[lowerCaseLetter] || 0) + 1;
  }

  return letterCounts;
}

console.log(letterCount("Caesar"));
console.log(letterCount("AAbaBa"));
letterCount("Caesar42");
