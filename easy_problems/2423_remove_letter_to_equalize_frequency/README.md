# 917. Reverse Only Letters

- Link: https://leetcode.com/problems/remove-letter-to-equalize-frequency/
- Submission Detail: https://leetcode.com/problems/remove-letter-to-equalize-frequency/submissions/1051291187/
- Date Solved: Sept. 16, 2023

# Description

You are given a **0-indexed** string `word`, consisting of lowercase English letters. You need to select **one** index and **remove** the letter at that index from `word` so that the **frequency** of every letter present in `word` is equal.

Return `true` if it is possible to remove one letter so that the frequency of all letters in `word` are equal, and `false` otherwise.

**Note:**

The **frequency** of a letter x is the number of times it occurs in the string.
You **must** remove exactly one letter and cannot chose to do nothing.

**Example 1**:

```
Input: word = "abcc"
Output: true
Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
```

**Example 2**:

```
Input: word = "abcc"
Output: true
Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
```
