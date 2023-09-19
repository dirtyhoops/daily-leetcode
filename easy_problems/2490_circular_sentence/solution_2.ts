// Solution without splitting the string
function isCircularSentence(sentence: string): boolean {
  for (let i = 0; i < sentence.length; i++) {
    // if there's a space, checks if the character before and after the space are not the same
    if (sentence[i] === ' ' && sentence[i - 1] !== sentence[i + 1]) {
      return false;
    }
  }

  // Compare first letter to last letter;
  return sentence[0] === sentence.at(-1);
}
