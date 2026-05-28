// Sliding window technique used
function lengthOfLongestSubstring(s: string): number {
  let left: number = 0;
  let result: number = 0;
  const inWindow = new Set<string>();

  for (let right = 0; right < s.length; right++) {
    while (inWindow.has(s[right])) {
      inWindow.delete(s[left]);
      left++;
    }

    inWindow.add(s[right]);
    result = Math.max(result, right - left + 1);
  }

  return result;
}

// abcabcbb
// 01234567
// R -> 0, L -> 0
// [a] - valid, result = 1

// R -> 1, L -> 0
// [a,b] - valid, result = 2

// R -> 2, L -> 0
// [a,b,c] - valid, result = 3

// R -> 3, L -> 0
// [a,b,c,a] - not valid, result = 3

// R -> 3, L -> 1
// [b,c,a] -> valid, result = 3

// R -> 4, L -> 1
// [b,c,a,b] -> not valid, result = 3

// R-> 4, L -> 2
// [c,a,b] -> valid, result = 3

// R -> 5, L -> 2
// [c,a,b,c] - not valid, result = 3

// R -> 5, L -> 3
// [a,b,c] - valid, result = 3

// R -> 6, L -> 3
// [a,b,c,b] - not valid, result = 3

// R -> 6, L -> 4
// [b,c,b] - not valid, result = 3

// R -> 6, L -> 5
// [c,b] - valid, result = 3

// R -> 7, L -> 5
// [c,b,b] not valid, result = 3

// R -> 7, L -> 6
// [b,b] not valid, result = 3
