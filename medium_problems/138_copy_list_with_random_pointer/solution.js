/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  const map = new Map();
  let curr = head;

  // Traverse the List and create new Nodes and map it
  while (curr) {
    const newNode = new Node(curr.val);
    map.set(curr, newNode);
    curr = curr.next;
  }

  // Restart the curr, and traverse the list again, but this time,
  // set the copied nodes' next pointer and random pointer
  curr = head;

  while (curr) {
    const copy = map.get(curr);
    copy.next = map.get(curr.next) || null;
    copy.random = map.get(curr.random) || null;
    curr = curr.next;
  }

  return map.get(head);
};
