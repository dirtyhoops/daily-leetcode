// Solution #4: Basically same idea as solution #3 but cleaner
function lengthOfLastWord(s: string): number {
  let countStarted = false;
  let len = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      countStarted = true;
      ++len;
      continue;
    }

    if (countStarted) {
      break;
    }
  }

  return len;
}

// Solution #3: Without built-in functions
function lengthOfLastWord(s: string): number {
  let countStarted = false;
  let len = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ' && !countStarted) countStarted = true;
    if (s[i] === ' ' && countStarted) break;
    if (countStarted) ++len;
  }

  return len;
}

// Solution #2: Basically same idea as solution #1 but one liner
function lengthOfLastWord(s: string): number {
  return s
    .split(' ')
    .reverse()
    .find(word => word !== '').length;
}

// Solution #1: Split strings into array and return the first non empty string starting from last index
function lengthOfLastWord(s: string): number {
  const arr = s.split(' ');
  let i = arr.length - 1;

  while (i >= 0) {
    if (arr[i] !== '') break;
    i--;
  }

  return arr[i].length;
}
