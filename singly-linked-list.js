// element is a node

// head beginning

//tail end

/* Singly link list is
singly directionally connected to the next node */

//head                tail
// 4 => 6 => 8 => 7 => 2

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/* ******** bad way to do it ********/
// var first = new Node("four");
// first.next = new Node("six");
// first.next.next = new Node("eight");
// first.next.next.next = new Node("seven");
// first.next.next.next.next = new Node("two");

//lets use methods now

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  /* 
  -----------------PUSH method------------------
1. Accept value
2. Create a node with value passed as param
3. if there is no head property on the list, 
  set head and tail to newNode 
4. else next tail property is newNode and
   tail property on the list to be the newly created node
 */
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /* 
  -----------------POP method------------------
1. if there are no nodes return undefined
2. else loop through it until the tail
3. set the next property of the one before the last node to be null
4. tail now second to last node
5. length-- if list has head only
6. return the value of the last node removed
 */
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
    return current;
  }
  /* 
  -----------------Shift method------------------
1. no nodes? then undefined
2. save current head
3. save current head to next head
4. length--
5. return the value of the node removed
 */
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  /* 
  -----------------Unshift method------------------
1. no nodes? then undefined
2. save current head
3. save current head to next head
4. length--
5. return the value of the node removed
 */

  // traverse() {
  //   var current = this.head;
  //   while(current) {
  //     current = current.next;
  //   }
  // }
}

var list = new SinglyLinkedList();

/* add this one at a time to the browser console */
// list.push('4')
//  head: 4
// list.push('6')
//  head: 4 => 6
// list.push('8')
//  head: 4 => 6 => 8
