/*
 * @作者: qiji 
 * @Date: 2020-06-14 20:04:48 
 * @最后更改:   qiji 
 * @最后更改: 2020-06-14 20:04:48 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 方法1：递归链表，也可以是多个链表的组合，组合的条件就是val 的大小，谁的小用谁的next

  // 方法2：迭代，移动链表的节点
  // 哨兵节点方便返回结果链表
  // prev节点做迭代的指针
  const sb = new ListNode(-1)
  console.log(sb)
  let prev = sb;
  while(l1 != null && l2 != null) {
    if(l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
      prev = prev.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
      prev = prev.next
    }
  }
};