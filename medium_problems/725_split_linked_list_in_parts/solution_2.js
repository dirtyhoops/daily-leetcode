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
  const len = getSize(head);
  const size = Math.floor(len / k);
  let extra = len % k;

  for (let i = 0; i < k; i++) {
    answer[i] = head;
    let width = size;

    if (extra > 0) {
      width++;
      extra--;
    }

    while (width > 1) {
      head = head.next;
      width--;
    }

    if (head) {
      const last = head;
      head = head.next;
      last.next = null;
    }
  }

  return answer;
};

function getSize(head) {
  let len = 0;
  while (head) {
    ++len;
    head = head.next;
  }

  return len;
}
