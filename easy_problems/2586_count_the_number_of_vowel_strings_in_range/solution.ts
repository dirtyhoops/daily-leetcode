function vowelStrings(words: string[], left: number, right: number): number {
  const set = new Set<string>('aeiou');
  let vowelStringCount = 0;

  for (let i = left; i <= right; i++) {
    if (set.has(words[i][0]) && set.has(words[i].at(-1))) {
      vowelStringCount++;
    }
  }

  return vowelStringCount;
}
