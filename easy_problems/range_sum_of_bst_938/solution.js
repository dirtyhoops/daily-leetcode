/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Solution #2: Iterative
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }

    if (node.left && node.val > low) {
      stack.push(node.left);
    }

    if (node.right && node.val < high) {
      stack.push(node.right);
    }
  }

  return sum;
};

// Solution #1
var rangeSumBST = function (root, low, high) {
  let sum = 0;

  function dfs(node) {
    if (!node) {
      return;
    }

    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }

    if (low < node.val && node.left) {
      dfs(node.left);
    }

    if (high > node.val && node.right) {
      dfs(node.right);
    }
  }

  dfs(root);
  return sum;
};
