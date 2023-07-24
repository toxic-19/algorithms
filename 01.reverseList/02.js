// 递归法：
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    // 2. 判断到达最后一个节点时，返回最后一个节点
    return head;
  }
  let cur = reverseList(head.next); // 1. 通过递归 head.next 到最后
  // 3. 假设是 1 -> 2 -> 3 -> 4 -> 5
  // 4. 此时返回的cur就是通过if判断的5. 在head.next为5的那个函数中,head为4
  head.next.next = head; // 5. 5 -> 4
  head.next = null; // 6. 断开 4 -> 5
  return cur;
};
// 想象为进栈：
// | reverseList(5) |  1. 此时：通过if语句: 跳出函数块 return listNode(5)
// | reverseList(4) |  2. 此时：head: listNode(4) 执行 reverseList(5) ==> cur: listNode(5)  然后交换 5 -> 4  4 ≠> 5
// | reverseList(3) |  3. 此时：head: listNode(3) 执行 reverseList(4) ==> cur: listNode(5)  然后交换 4 -> 3  3 ≠> 4
// | reverseList(2) |  4. 此时: head: listNode(2) 执行 reverseList(3) ==> cur: listNode(5)  然后交换 3 -> 2  2 ≠> 3
// | reverseList(1) |  5. 此时: head: listNode(1) 执行 reverseList(2) ==> cur: listNode(5)  然后交换 2 -> 1  1 ≠> 2
//  ————————————————
