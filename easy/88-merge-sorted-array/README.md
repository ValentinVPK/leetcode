# 88. Merge Sorted Array

**Difficulty:** Easy

## Problem

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n` representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order, stored in-place inside `nums1`. `nums1` has a length of `m + n`, where the first `m` elements are the actual values and the last `n` elements are set to `0` and should be ignored.

## Examples

**Example 1:**
```
Input:  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
```

**Example 2:**
```
Input:  nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
```

**Example 3:**
```
Input:  nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
```

## Constraints

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10⁹ <= nums1[i], nums2[j] <= 10⁹`

## Follow-up

Can you come up with an algorithm that runs in O(m + n) time?

## Solution

**Merge from the back** — instead of inserting from the front (which would require shifting elements), iterate from the end of both arrays and place the larger element at the last available position in `nums1`, working backwards.

This avoids overwriting unprocessed elements in `nums1` since the write pointer always stays ahead of the read pointer. If any elements remain in `nums2` after the main loop, they are copied over directly — remaining elements in `nums1` are already in place.

Time complexity: O(m + n).  
Space complexity: O(1).
