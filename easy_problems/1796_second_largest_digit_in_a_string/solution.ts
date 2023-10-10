function secondHighest(s: string): number {
  const nums = [];

  for (const char of s) {
    if (checkStr(char)) nums.push(Number(char));
  }

  const set = [...new Set(nums.sort((a, b) => a - b))];

  return set.length > 1 ? set[set.length - 2] : -1;
}

function checkStr(str: string): boolean {
  return /^[0-9]*$/.test(str);
}
