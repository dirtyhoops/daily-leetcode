function totalMoney(n: number): number {
  let res = 0;
  let week = 0;
  let day = 1;

  for (let i = 1; i <= n; i++) {
    res += week + day;

    // Adds 1 to the week and resets day
    if (i % 7 === 0) {
      week++;
      day = 0;
    }

    day++;
  }

  return res;
}
