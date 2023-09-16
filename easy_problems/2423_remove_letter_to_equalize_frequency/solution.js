/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const freq = {};

  for (const c of word) {
    freq[c] = (freq[c] ?? 0) + 1;
  }

  for (let i = 0; i < Object.values(freq).length; i++) {
    let values = Object.values(freq);
    values[i] = values[i] - 1;
    const set = new Set(values);

    if (set.size === 1 || (set.size === 2 && set.has(0))) return true;
  }

  return false;
};
