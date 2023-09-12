// Solution #2: without built-in functions
function countSegments(s: string): number {
  if (s.length === 0) return 0;

  // start count to 1 if the first letter is a non-space characters
  let count = s[0] !== ' ' ? 1 : 0;

  for (let i = 1; i < s.length; i++) {
    // increment count if there's a space followed by a non-space character
    if (s[i] !== ' ' && s[i - 1] === ' ') {
      ++count;
    }
  }

  return count;
}

// Solution #1: using built-in function split and filter
function countSegments(s: string): number {
  return s.split(' ').filter(str => str !== '').length;
}
