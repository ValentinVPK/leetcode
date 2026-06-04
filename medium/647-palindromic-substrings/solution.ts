function countSubstrings(s: string): number {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    total += expand(s, i, i);
    total += expand(s, i, i + 1);
  }

  return total;
}

function expand(s: string, left: number, right: number): number {
  let count = 0;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    count++;
    left--;
    right++;
  }

  return count;
}
