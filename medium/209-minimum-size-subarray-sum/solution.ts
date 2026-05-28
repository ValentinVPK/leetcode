// Sliding window technique used
function minSubArrayLen(target: number, nums: number[]): number {
  let left: number = 0;
  let minLength: number = Number.MAX_SAFE_INTEGER;
  let sum: number = 0;

  for (let right = 0; right < nums.length; right++) {
    sum = sum + nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum = sum - nums[left];
      left++;
    }
  }

  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
}

// Input: target = 7, nums = [2,3,1,2,4,3]

// 2,3,1,2,4,3
// 0,1,2,3,4,5

// R -> 0, L -> 0
// sum = 2 - invalid, minLength = 0;

// R -> 1, L -> 0
// sum = 5 - invalid, minLength = 0;

// R -> 2, L -> 0
// sum = 6 - invalid, minLength = 0;

// R -> 3, L -> 0
// sum = 8 - valid, minLength = 4;

// R -> 3, L -> 1
// sum = 6 - invalid, minLength = 4;

// R -> 4, L -> 1
// sum = 10 - valid, minLength = 4;

// R -> 4, L -> 2
// sum = 7 - valid, minLength = 3;

// R -> 4, L -> 3
// sum = 6 - invalid, minLength = 3;

// R -> 5, L -> 3
// sum = 9 - valid, minLength = 3

// R -> 5, L -> 4
// sum = 7  - valid, minLength = 2
