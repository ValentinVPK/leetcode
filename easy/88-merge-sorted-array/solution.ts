/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1; // last real element of nums1
  let j = n - 1; // last element of nums2
  let write = m + n - 1; // last position of nums1

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[write] = nums1[i];
      i--;
    } else {
      // nums2[j] >= nums[i]
      nums1[write] = nums2[j];
      j--;
    }

    write--;
  }

  while (j >= 0) {
    nums1[write] = nums2[j];
    j--;
    write--;
  }
}
