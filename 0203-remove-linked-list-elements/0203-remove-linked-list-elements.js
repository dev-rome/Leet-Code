/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head === null) return null;
    let current = new ListNode(-1);
    current.next = head;
    head = current;
    while(current.next !== null) {
        if(current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head.next;
};