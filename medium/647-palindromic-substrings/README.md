# 647. Palindromic Substrings

**Difficulty:** Medium

## Problem

Given a string `s`, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

## Examples

**Example 1:**
```
Input:  s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```

**Example 2:**
```
Input:  s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

## Solution

**Expand Around Center** — for each character in the string, treat it as the center of a potential palindrome and expand outward in both directions as long as the characters match. Each valid expansion is a palindromic substring.

Since palindromes can have either an odd length (single character center) or even length (two character center), the expansion is done twice per position — once for odd-length and once for even-length palindromes.

Time complexity: O(n²) — O(n) centers, each expanding up to O(n) times.  
Space complexity: O(1).

## Constraints

- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters
