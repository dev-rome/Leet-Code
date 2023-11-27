/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let current = slow;
    let next = null;
    let prev = null;
    while(current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    let head2 = prev;
    while(head && head2) {
        if(head.val !== head2.val) return false;
        head = head.next;
        head2 = head2.next;
    }
    return true;
};