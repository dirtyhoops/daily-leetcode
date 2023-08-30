/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;

  for (let sentence of sentences) {
    let spaceCounter = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') spaceCounter++;
    }

    // Add 1 to spaceCounter since there's always going to be 1 more word
    // than spaces assuming that sentences[i] does not have leading or trailing space.
    max = Math.max(max, spaceCounter + 1);
  }

  return max;
};
