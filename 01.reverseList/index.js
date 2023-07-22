function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head; // 保存一下头结点
  let pre = null; // 定义头结点反转之后指向的pre, 此时为null
  let next;
  while (cur !== null) {
    // 1. 先保存一下现在cur的下一个节点，否则待会反转之后就找不到了
    next = cur.next;
    // 2. 进行反转
    cur.next = pre;
    // 3. 进行向下交换位置
    pre = cur;
    cur = next;
    // 4. 以上三步要持续到cur为null为止：pre到最后一个节点; 所以添加一个while
  }
  return pre; // 记得return出去，不然无法出现
};
