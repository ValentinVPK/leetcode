// 0 -> red
// 1 -> white
// 2 -> blue
/**
 Do not return anything, modify nums in-place instead.
 1st solution - counting sort
 */
function sortColors1st(nums: number[]): void {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count0++;
    } else if (nums[i] === 1) {
      count1++;
    } else if (nums[i] === 2) {
      count2++;
    }
  }

  let i = 0;
  while (count0 > 0) {
    nums[i] = 0;
    i++;
    count0--;
  }

  while (count1 > 0) {
    nums[i] = 1;
    i++;
    count1--;
  }

  while (count2 > 0) {
    nums[i] = 2;
    i++;
    count2--;
  }
}

/**
 Do not return anything, modify nums in-place instead.
 2nd solution - Dutch National Flag algorithm (three-way partitioning)
 */
function sortColors2nd(nums: number[]): void {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      let temp = nums[mid];
      nums[mid] = nums[low];
      nums[low] = temp;
      mid++;
      low++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      let temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;
      high--;
    }
  }
}
