function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];

  // Sort the array, with the array sorted, I only have to
  // compare the first and last item in the array.
  strs.sort();

  let common = '';

  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] === strs[strs.length - 1][i]) {
      common += strs[0][i];
    } else {
      break;
    }
  }

  return common;
}
