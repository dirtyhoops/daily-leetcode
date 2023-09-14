function reverseOnlyLetters(s: string): string {
  const stack = [];
  const reversed = [];

  for (const char of s) {
    if (isLetter(char)) {
      stack.push(char);
    }
  }

  for (const char of s) {
    if (isLetter(char)) {
      reversed.push(stack.pop());
    } else {
      reversed.push(char);
    }
  }

  return reversed.join('');
}

function isLetter(char: string): boolean {
  return /[a-zA-Z]/.test(char);
}

// function isLetter(char: string): boolean {
//   return ('A' <= char && char <= 'Z') || ('a' <= char && char <= 'z');
// }
