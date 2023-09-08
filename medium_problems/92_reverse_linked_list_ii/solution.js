/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) return head;

  let start = null;
  let startprev = null;
  let end = null;
  let endnext = null;

  let pos = 1;
  let curr = head;

  while (curr && pos <= right) {
    if (pos < left) startprev = curr;
    if (pos === left) start = curr;
    if (pos === right) {
      end = curr;
      endnext = curr.next;
    }

    curr = curr.next;
    pos++;
  }

  end.next = null;

  end = reverse(start);

  if (startprev) {
    startprev.next = end;
  } else {
    head = end;
  }

  start.next = endnext;
  return head;
};

function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
