function ListNode(val){
    this.val = val;
    this.next = null;
}

/*
    Accepts, linkedlist head
    Returns, linkedList
 */
function getOddsEvens(head){

    if(!head || !head.next || !head.next.next)
    {
        return head;
    }

    var odd = head;
    var oddHead = head;
    var even = head.next;
    var evenHead = head.next;


    while(head && head.next)
    {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return oddHead;
}


/*function getOddsEvens(head){

    var oddStart = new ListNode(0);
    var odds = oddStart;
    var evenStart = new ListNode(99);
    var evens = evenStart;
    var odd = true;

    while(head) {

        if (odd) {
            odds.val = head.val;
            if (head.next && head.next.val) {
                odds.next = new ListNode(0);
                odds = odds.next;
            }
        }
        else {
            evens.val = head.val;
            if (head.next && head.next.val) {
                evens.next = new ListNode(0);
                evens = evens.next;
            }
        }

        odd = !odd;
        head = head.next;
    }

    //odds.next = evenStart;

    return evenStart;
}*/

/* Input and Testing */

var input = new ListNode(1);
input.next = new ListNode(2);
input.next.next = new ListNode(3);
input.next.next.next = new ListNode(4);
input.next.next.next.next = new ListNode(5);

var output = getOddsEvens(input);
printList(output);

function printList(head){

    while(head){
        console.log('Value = ' + head.val);

        head = head.next;
    }

}