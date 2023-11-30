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
var mergeTwoLists = function(list1, list2) {
    let mergedHead = new ListNode(0);
    head = mergedHead;
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            mergedHead.next = list1;
            list1 = list1.next;
        } else {
            mergedHead.next = list2;
            list2 = list2.next;
        }
        mergedHead = mergedHead.next;
    }
    
    if(list1 !== null) {
        mergedHead.next = list1
    } else {
        mergedHead.next = list2
    }
    return head.next;
};