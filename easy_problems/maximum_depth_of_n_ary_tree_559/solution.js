/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// Solution #1: Recursive
/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let maximumDepth = 0;

  for (let node of root.children) {
    maximumDepth = Math.max(maximumDepth, maxDepth(node));
  }

  return maximumDepth + 1;
};

// Solution #2: Iterative using Queue (BFS)
var maxDepth = function (root) {
  if (!root) return 0;

  const queue = [root, 's'];
  let depth = 1;

  while (queue.length > 1) {
    const node = queue.shift();

    if (node === 's') {
      depth++;
      queue.push('s');
    } else {
      queue.push(...node.children);
    }
  }

  return depth;
};
