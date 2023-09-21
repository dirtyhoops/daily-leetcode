function convertToBase7(num: number): string {
  if (num === 0) return '0';
  let res = '';
  let temp = num < 0 ? Math.abs(num) : num;

  while (temp > 0) {
    res = (temp % 7) + res;
    temp = Math.floor(temp / 7);
  }

  return num < 0 ? `-${res}` : res;
}
