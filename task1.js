function getLongestWord(sentence) {
  const cleaned = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  const words = cleaned.split(" ");
  let longestword = "";
  words.forEach((word) => {
    if (word.Length > longestword.Length) {
      longestword = word;
    } else if (word.Length == longestword.Length) {
      const wordVowel = word.replace(/[^aeiouAEIOU]/g, "").Length;
      const longestwordVowel = longestword.replace(/[^aeiouAEIOU]/g, "").Length;
      if (wordVowel > longestwordVowel) {
        longestword = word;
      } else {
        longestword = longestword;
      }
    }
  });
  return longestword;
}

console.log(getLongestWord("I am a software developer."));
