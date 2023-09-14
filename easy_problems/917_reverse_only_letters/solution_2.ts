function reverseOnlyLetters(s: string): string {
  const reg = /[a-zA-Z]/;
  const arr = [...s];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (!reg.test(arr[left])) {
      left++;
      continue;
    }

    if (!reg.test(arr[right])) {
      right--;
      continue;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join('');
}
