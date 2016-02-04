/*

 Remove all elements from a linked list of integers that have value val.

 Example
 Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
 Return: 1 --> 2 --> 3 --> 4 --> 5

 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val) {
    'use strict';
    this.val = val;
    this.next = null;
}


var removeElements = function (head, val) {
    'use strict';

    if(head && head.val && head.val === val && !head.next){
        head.val = null;
    }

    while (head && head.next)
    {
        if (head.next.val === val) {
            head.next = head.next.next ? head.next.next : null;
        }

        head = head.next;
    }
};


var removeMoreElements = function (head, val) {
    'use strict';

    var newHead = new ListNode();

    while (head) {

        newHead.next = new ListNode();
        newHead = newHead.next;

        if (head.val !== val) {
            newHead.val = val;
        }

        head = head.next ? head.next : null;
    }

};





var val = [];

var head = new ListNode([]);
//head.next = new ListNode(1);

console.log([] === val);
// If we have a single value in the linked list and that value is
// the one we're looking fore, just make the list item a null
if(head.val === val && !head.next){
    head.val = null;
}

// If the first item in the list is our candidate,
// skip the head over to the next element
if(head.val === val && head.next){
    head = head.next;
}

var original = head;

//While we have a value and a next value
while (head && head.next)
{
    //if the next value is our candidate
    if (head.next.val === val) {
        //skip the next value and go to the next next value
        head.next = head.next.next ? head.next.next : null;
    }

    head = head.next;
}

//Output whole of list

while (original)
{
    console.log(original.val);
    original = original.next;
}