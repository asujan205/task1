function findLongestWord(sentence) {
  const cleanedword = sentence.replace(/[^a-zA-Z ]/g, "");
  const words = cleanedword.split(" ");
  let longestWord = "";

  words.forEach((word) => {
    if (word.Length > longestWord.Length) {
      longestWord = word;
    } else if (word.Length == longestWord.Length) {
      worvowwels = word.replace(/[^aeiouAEIOU]/gi, "").length;
      longestWordvowels = longestWord.replace(/[^aeiouAEIOU]/gi, "").length;
      if (worvowwels > longestWordvowels) {
        longestWord = word;
      } else {
        longestWord = longestWord;
      }
    }
  });
  return longestWord;
}

console.log(
  findLongestWord(
    "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
  )
);
