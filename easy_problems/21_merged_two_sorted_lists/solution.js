/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // Create a new ListNode with a fake head
  const mergedList = new ListNode(-1, null);
  let curr = mergedList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    curr = curr.next;
  }

  // merge the remaining nodes from either list1 or list2 (only 1 will have node(s) left)
  curr.next = list1 || list2;

  // Return mergedList without the fake head
  return mergedList.next;
};
