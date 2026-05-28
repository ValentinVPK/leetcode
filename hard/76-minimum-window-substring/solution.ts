function minWindow(s: string, t: string): string {
  // Quick impossibility check: t can't be a subset of s if it's longer
  if (t.length > s.length) return "";

  // Step 1: Build the `need` map — character -> how many times required
  const need: Record<string, number> = {};
  for (const ch of t) {
    need[ch] = (need[ch] ?? 0) + 1;
  }

  // `required` = how many distinct characters we need to satisfy
  const required = Object.keys(need).length;

  // `window` tracks character counts in the current window [left..right]
  const window: Record<string, number> = {};

  // `formed` = how many distinct characters currently meet their required count
  // The window is valid when formed === required
  let formed = 0;

  let left = 0;
  let bestLeft = -1;
  let minLength = Number.MAX_SAFE_INTEGER;

  for (let right = 0; right < s.length; right++) {
    // === EXPAND: add s[right] to the window ===
    const rChar = s[right];
    window[rChar] = (window[rChar] ?? 0) + 1;

    // Did adding this character just satisfy a requirement?
    // Only increment `formed` on the exact transition to "satisfied"
    if (need[rChar] !== undefined && window[rChar] === need[rChar]) {
      formed++;
    }

    while (formed === required) {
      // Record best (before shrinking, since the window is currently valid)
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        bestLeft = left;
      }

      const lChar = s[left];

      // If removing this character will drop us below a requirement,
      // decrement `formed` BEFORE we decrement window[lChar]
      if (need[lChar] !== undefined && window[lChar] === need[lChar]) {
        formed--;
      }

      window[lChar] -= 1;
      left++;
    }
  }

  return bestLeft === -1 ? "" : s.substring(bestLeft, bestLeft + minLength);
}

// Input: s = "ADOBECODEBANC", t = "ABC"
// ADOBECODEB A  N  C
// 0123456789 10 11 12

// required = 3, have = 0
// R -> 0, L -> 0

// A -> have = 1 < required = 3 - invalid

// R -> 1, L -> 0

// AD -> have = 1, required = 3 - invalid

// R -> 2, L -> 0

// ADO -> have = 1, required = 3 - invalid

// R -> 3, L -> 0

// ADOB -> have = 2, required = 3 - invalid

// R -> 4, L -> 0

// ADOBE -> have = 2 < required = 3 - invalid

// R -> 5, L -> 0

// ADOBEC -> have = 3, required = 3 - valid -> minLength = 6, finalRight = 5, finalLeft = 0

// R -> 5, L -> 1

// DOBEC -> have = 2, required = 3 - invalid

// R -> 6, L -> 1

// DOBECO -> have = 2, required = 3 - invalid

// R -> 7, L -> 1

// DOBECOD - have = 2, required = 3 - invalid

// R -> 8, L -> 1

// DOBECODE - have = 2, required = 3 - invalid

// R -> 9, L -> 1
// DOBECODEB - have = 2, required = 3, invalid

// R -> 10, L -> 1

// DOBECODEBA -> have = 3, required = 3 - valid, minLength = 10, finalRight = 5, finalLeft = 0

// R -> 10, L -> 2

// OBECODEBA -> have = 3, required = 3 - valid, minLength = 9

// R -> 10, L -> 3

// BECODEBA -> have = 3, required
