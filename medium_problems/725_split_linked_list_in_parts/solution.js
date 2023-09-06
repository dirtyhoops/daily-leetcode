/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  const answer = new Array(k).fill(null);
  let len = 0;
  let curr = head;

  // Count the length of the LL
  while (curr) {
    ++len;
    curr = curr.next;
  }

  // size of each part of LL and the extra
  const size = Math.floor(len / k);
  let extra = len % k;

  //
  curr = head;
  for (let i = 0; i < k; i++) {
    let ptr = curr;
    let pt = ptr;
    let width = size;

    // add 1 to the width if there's extra
    if (extra > 0) {
      width++;
      extra--;
    }

    // copy the nodes
    while (width > 0 && curr) {
      ptr = curr;
      ptr.next = curr.next;
      curr = curr.next;
      width--;
    }

    // points to null if it's not the end of the list
    if (ptr !== null) ptr.next = null;

    // Add the LL part in the array
    answer[i] = pt;
  }

  return answer;
};
