// Solution #1: with Splitting the string
function isCircularSentence(sentence: string): boolean {
  const arr = sentence.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      if (arr[arr.length - 1][arr[arr.length - 1].length - 1] !== arr[0][0]) {
        return false;
      }
    } else {
      if (arr[i][arr[i].length - 1] !== arr[i + 1][0]) {
        return false;
      }
    }
  }

  return true;
}
