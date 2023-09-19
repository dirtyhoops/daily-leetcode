function maximumValue(strs: string[]): number {
  let max = 0;

  for (const str of strs) {
    max = Math.max(max, isNumeric(str) ? parseInt(str) : str.length);
  }

  return max;
}

// Checks if string are all numerics
function isNumeric(value: string) {
  return /^-?\d+$/.test(value);
}
