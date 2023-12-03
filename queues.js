// Introduction to Queues

/*Notes
A queue is a linear data structure that follows the FIFO (First-In-First-Out) principle.
Imagine a real-world queue like a line at a ticket counter or a bus stop.
The first person to join the line is the first person to be served, and so on.
Similarly, in a software implementation of a queue, the first element to be added to the queue is the first element to be removed.
When you add an element to the queue, it is added to the end of the line.
When you remove an element from the queue, it is removed from the front of the line.
This ensures that the first element added is the first one to be removed, as per the FIFO principle.
Queues are often used in computer science for tasks such as processing incoming network requests or printing documents in the order they were received.
Queues are commonly found in real-world scenarios where a group of people, objects, or events wait in line for a service, resource, or event. 
Here are some examples of real-world queues:
1 Waiting in line at a movie theater: People form a queue and wait in line to buy tickets to watch a movie.
2 Printer queue: Documents that need to be printed are added to a queue, and the printer prints them in the order they were received.
3 Call center queue: Customers who call a company for customer service are placed in a queue and are served in the order they called.
4 Online ticket purchase: Customers wait in a virtual queue to purchase limited tickets for events such as concerts and sports games.
5 Traffic queue: Cars in a traffic jam wait in a queue to move forward on the road.
*/

//_______________________________________________________________________________________

//Queue Operations

/*Notes
The following are the basic operations that can be performed on a queue:
1 Enqueue: This operation adds an element to the end of the queue. It takes the element to be added as the argument.
2 Dequeue: This operation removes the element from the front of the queue. It does not take any argument.
3 Peek: This operation returns the element at the front of the queue without removing it. It does not modify the queue.
4 Size: This operation returns the number of elements in the queue. It does not modify the queue.
5 IsEmpty: This operation returns true if the queue is empty and false otherwise. It does not modify the queue.
6 IsFull: This operation returns true if the queue is full and false otherwise. This operation is only applicable for a fixed-size queue.
7 Clear: This operation removes all the elements from the queue and resets it to an empty state.
*/

//Enqueue
/*Notes
The enqueue operation is used to add an element to the back of the queue. 
This operation involves adding an element to the end of the queue and updating the rear pointer to point to the new element.
When an element is added to the queue, it becomes the last element in the queue.
This is why the enqueue operation is also sometimes referred to as the "add" operation.
*/
//Example Implementation:
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue("apple");
  myQueue.enqueue("banana");
  myQueue.enqueue("cherry");
  
  console.log(myQueue.items);
  // Output: ["apple", "banana", "cherry"]
/*Notes

*/  

//Dequeue
/*Notes
Dequeue operation is used to remove an item from the front of a queue.
In a queue, the item that has been in the queue for the longest time is always at the front.
The item that has been in the queue for the shortest time is at the rear.
*/
/*Notes
Dequeue operation steps are:
1 Check if the queue is empty. If the queue is empty, then the operation is not possible, and an error is thrown.
2 Store the front element of the queue in a temporary variable.
3 Remove the front element from the queue.
4 Decrement the size of the queue by 1.
5 Return the temporary variable.
*/
//Example Implementation:
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue underflow");
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    size() {
      return this.items.length;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
  }
  
  let queue1 = new Queue();
  queue1.enqueue(10);
  queue1.enqueue(20);
  queue1.enqueue(30);
  console.log(queue1.dequeue()); // Output: 10
  console.log(queue1.size()); // Output: 2
/*Notes

*/
  
//Peek
/*Notes
The peek function is used to get the element at the front of the queue without removing it.
The peek function is useful when you want to check what element is at the front of the queue.
*/
//Example Implementation:
// create a new queue
let queue2 = new Queue();

// add some elements to the queue
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);

// peek at the first element in the queue
console.log(queue2.peek()); // output: 10

// dequeue an element from the queue
queue2.dequeue();

// peek at the first element in the queue again
console.log(queue.peek()); // output: 20

//Example implementation for an array:
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    clear() {
      this.items = [];
    }
  
    size() {
      return this.items.length;
    }
  }
/*Notes

*/

//Size
/*Notes

*/
//Example Implementation:
class Queue {
    constructor() {
      this.items = [];
    }
  
    size() {
      return this.items.length;
    }
  
    // Other methods...
  }
/*Notes

*/

//IsEmpty
/*Notes

*/
//Example Implementation:
isEmpty() ;{
    return this.items.length == 0;
  }
/*Notes

*/

//IsFull
/*Notes

*/
//Example Implementation:
isFull() ;{
    return this.size() === this.maxSize;
  }
/*Notes

*/  

//Clear
/*Notes

*/
//Example Implementation:
clear() ;{
    this.items = [];
  }
/*Notes

*/  

//_______________________________________________________________________________________

//Array Implementation of Queue
let queue = [] 
queue.push('first element')
queue.push('second element')  
queue.push('third element')
// current queue: ['first', 'second', 'third']

// the shift() function to removes the first element
queue.shift();
// current queue: ['second', 'third']

//Example Implementation:
class Queue {
    constructor(maxSize) {
      this.maxSize = maxSize; // Maximum number of elements that can be stored in the queue
      this.items = []; // Array to store the elements of the queue
    }
  
    // Check if the queue is full
    isFull() {
      return this.items.length === this.maxSize;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Add an element to the back of the queue
    enqueue(element) {
      if (this.isFull()) {
        throw new Error("Queue overflow"); // Throw an error if the queue is already full
      }
      this.items.push(element); // Add the element to the back of the queue
    }
  
    // Remove and return the element at the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue underflow"); // Throw an error if the queue is already empty
      }
      return this.items.shift(); // Remove and return the element at the front of the queue
    }
  
    // Return the element at the front of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty"; // Return a message if the queue is already empty
      }
      return this.items[0]; // Return the element at the front of the queue
    }
  
    // Return the number of elements in the queue
    size() {
      return this.items.length;
    }
  
    // Remove all elements from the queue
    clear() {
      this.items = [];
    }
  }
/*Notes

*/  

//_______________________________________________________________________________________

//Linked List Implementation of a Queue
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.back = null;
      this.size = 0;
    }
  
    enqueue(data) {
      const newNode = new Node(data);
      if (this.isEmpty()) {
        this.front = newNode;
        this.back = newNode;
      } else {
        this.back.next = newNode;
        this.back = newNode;
      }
      this.size++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      const data = this.front.data;
      this.front = this.front.next;
      this.size--;
      if (this.isEmpty()) {
        this.back = null;
      }
      return data;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.front.data;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    clear() {
      this.front = null;
      this.back = null;
      this.size = 0;
    }
  
    getSize() {
      return this.size;
    }
  }

/*Notes

*/ 

const queue3 = new Queue();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue3.getSize()); // output: 3
console.log(queue.peek()); // output: "A"

queue.dequeue();
console.log(queue3.getSize()); // output: 2
console.log(queue.peek()); // output: "B"

queue3.clear();
console.log(queue3.getSize()); // output: 0

/*Notes

*/ 

//_______________________________________________________________________________________

//Other Types of Queues

/*Notes

*/ 

//Circular Queue
/*Notes

*/ 
//Example Implementation:
class CircularQueue {
    constructor(capacity) {
      this.capacity = capacity;
      this.arr = new Array(capacity);
      this.head = 0;
      this.tail = 0;
      this.count = 0;
    }
  
    enqueue(val) {
      if (this.isFull()) {
        throw new Error('Queue is full');
      }
      this.arr[this.tail] = val;
      this.tail = (this.tail + 1) % this.capacity;
      this.count++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      const val = this.arr[this.head];
      this.head = (this.head + 1) % this.capacity;
      this.count--;
      return val;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      return this.arr[this.head];
    }
  
    isFull() {
      return this.count === this.capacity;
    }
  
    isEmpty() {
      return this.count === 0;
    }
  }
/*Notes

*/

//Priority Queue
/*Notes

*/
//Example Implementation:
class Node {
    constructor(data, priority) {
      this.data = data;
      this.priority = priority;
      this.next = null;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.head = null;
    }
  
    enqueue(data, priority) {
      const newNode = new Node(data, priority);
  
      // Case 1: List is empty or new node has higher priority than head
      if (!this.head || priority > this.head.priority) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
  
        // Case 2: Traverse the list to find the correct position for the new node
        while (current.next && priority <= current.next.priority) {
          current = current.next;
        }
  
        newNode.next = current.next;
        current.next = newNode;
      }
    }
  
    dequeue() {
      if (!this.head) {
        return null;
      }
  
      const removedNode = this.head;
      this.head = this.head.next;
  
      return removedNode.data;
    }
  
    isEmpty() {
      return this.head === null;
    }
  
    peek() {
      return this.head ? this.head.data : null;
    }
  }
/*Notes

*/  

//Implementing a Priority Queue with an Array
/*Notes

*/  
//Example Implementation:
class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item, priority) {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (priority < this.items[i].priority) {
          this.items.splice(i, 0, { item, priority });
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push({ item, priority });
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift().item;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0].item;
    }
  
    size() {
      return this.items.length;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
/*Notes

*/   
