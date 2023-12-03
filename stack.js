/* Overview of Stacks
A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. 
In JavaScript, a stack can be implemented using an array.
You can push items onto the top of the stack using the push() method.
You can remove items from the top of the stack using the pop() method.
*/
// Pop() and Push()
//Example Implementation:
// let stack = []; // Create the stack data structure array

// // Build the stack by pushing values to the stack:
// stack.push(1); // [1]
// stack.push(2); // [1,2]
// stack.push(3); // [1,2,3]
// stack.push(4); // [1,2,3,4]
// stack.push(5); // [1,2,3,4,5]

// // Now pop off the top value:
// console.log(stack.pop()); // 5
// console.log(stack); // [1,2,3,4];

/*
In the above example, we first create an empty array stack to represent the stack data structure.
We then add elements to the stack by using the push() method.
The last element added is 5, which is the first one to be removed using the pop() method.
The pop() method removes the top element from the stack and returns it.
You can continue to pop values off the stack using the pop() method until the stack is empty.
When you try to pop() a value off an empty stack, you'll get an undefined value.
*/
//Example of an empty pop():
console.log(stack.pop()); //  4
console.log(stack.pop()); //  3
console.log(stack.pop()); //  2
console.log(stack.pop()); //  1

console.log(stack); // []; -> empty

console.log(stack.pop()); //  undefined

//_______________________________________________________________________________________

// Improving the Stack

/*
1 Encapsulate the stack into a class.
Rather than relying on an array variable to implement the stack, it would be better to create a separate class that encapsulates the stack.
This allows you to add additional functionality.
Some Additional Functionality:
size
peek
clear
isEmpty
*/

//Example Implementation:
class Stack { // This declares a new class called Stack.
    constructor() {
       // This defines the constructor method for the Stack class which sets up an empty array called items. This will be used to store the stack elements.
      this.items = [];
    }
    
    push(element) {
   // This method is used to add an element to the top of the stack. It accepts a parameter called element and pushes it onto the end of the items array.
      this.items.push(element);
    }
    
    pop() {
   // This method removes and returns the top element of the stack. If the stack is empty, it returns undefined to indicate that there's nothing to remove. If the stack is not empty, it removes the last element from the items array and returns it.
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items.pop();
    }
    
    peek() {
  // This method returns the top element of the stack without removing it. If the stack is empty, it returns undefined. If the stack is not empty, it returns the last element in the items array.
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.items.length - 1];
    }
    
    size() {
  // This method returns the number of elements in the stack by returning the length of the items array.
      return this.items.length;
    }
    
    isEmpty() {
  // This method checks if the stack is empty by checking if the length of the items array is 0. If it's empty, it returns true. Otherwise, it returns false.
      return this.items.length === 0;
    }
    
    clear() {
  // This method removes all the elements from the stack by setting the items array to an empty array.
      this.items = [];
    }
  } // closes our Stack class definition
  
/*
Use constants to avoid hard-coding values.
Instead of using hard-coded values like 5 and undefined, it is better to use constants.
This makes the code more readable and less prone to errors.
*/

//Example Implementation:
// const MAX_STACK_SIZE = 5; 
//  This creates a constant MAX_STACK_SIZE with a value of 5, which represents the maximum size of the stack.

// const UNDEFINED = undefined;
 // This creates a constant UNDEFINED with a value of undefined, which will be used to represent an empty stack when popping an element from it.

/*
Add error checking
The above implementation assumes that the stack has a fixed size.
It is better to add error checking to ensure that the stack does not overflow or underflow.
*/

//Example push() Implementation:
push(element) ;{ 
    // This is the push method of the Stack class, which takes an argument element to add to the top of the stack.
    
        if (this.size() === MAX_STACK_SIZE) {
    // This checks if the stack is already at its maximum size, and throws an error if it is.
    
          throw new Error("Stack overflow"); 
    // This throws an error with the message "Stack overflow" if the stack is already at its maximum size.
        }
    
        this.items.push(element); 
    // This adds the element to the end of the items array, representing adding the element to the top of the stack.
      }

/*
Use ES6 classes.
Although not strictly necessary, you can use ES6 classes to create the Stack class.
*/

//Example Implementation:
const MAX_STACK_SIZE = 5; //  This creates a constant MAX_STACK_SIZE with a value of 5, which represents the maximum size of the stack.
const UNDEFINED = undefined; // This creates a constant UNDEFINED with a value of undefined, which will be used to represent an empty stack when popping an element from it.

class Stack { // This line declares a new class called Stack.
  constructor() {
// This is the constructor method of the Stack class, which is called when a new instance of the class is created. It initializes the items array to an empty array.
    this.items = []; // This initializes the items property of the Stack object to an empty array.
  }

  push(element) { 
// This is the push method of the Stack class, which takes an argument element to add to the top of the stack.
    if (this.size() === MAX_STACK_SIZE) {
// This checks if the stack is already at its maximum size, and throws an error if it is.
      throw new Error("Stack overflow"); // This throws an error with the message "Stack overflow" if the stack is already at its maximum size.
    }
    this.items.push(element); // This adds the element to the end of the items array, representing adding the element to the top of the stack.
  }

  pop() { 
// This is the pop method of the Stack class, which removes and returns the element at the top of the stack.
    if (this.isEmpty()) { //  This checks if the stack is empty, and returns undefined if it is.
      return UNDEFINED; // This returns the UNDEFINED constant, which represents an empty stack.
    }
    return this.items.pop(); // This removes and returns the last element of the items array, which represents removing the element at the top of the stack.
  }

  peek() { 
// This is the peek method of the Stack class, which returns the element at the top of the stack without removing it.
    if (this.isEmpty()) { //  This checks if the stack is empty, and returns undefined if it is.
      return UNDEFINED; // This returns the UNDEFINED constant, which represents an empty stack.
    }
    return this.items[this.items.length - 1]; //This returns the last element of the items array, which represents the element at the top of the stack.
  }

  size() { 
//This is the size method of the Stack class, which returns the number of elements in the stack.
    return this.items.length; // This returns the length of the items array, which represents the number of elements in the stack.
  }

  isEmpty() { 
// This is the isEmpty method of the Stack class, which returns true if the stack is empty, and false otherwise.
    return this.items.length === 0; // This returns true if the items array is empty, and false otherwise.
  }

  clear() { // This is the clear method of the Stack class, which clears all elements from the stack.
    this.items = []; //This sets the items property of the Stack object to an empty array, effectively clearing all elements from the stack.
  }
}

//_______________________________________________________________________________________

//Quick Note on Peek Function

/*
The peek function is not mandatory for a stack implementation, but it can be a useful feature to have.
It allows you to look at the top item on the stack without removing it.
*/

//Example Implementation:
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.pop()); // 2
console.log(stack.peek()); // 1
console.log(stack.pop()); // 1
console.log(stack.peek()); // undefined
console.log(stack.pop()); // undefined

//_______________________________________________________________________________________

//Linked List Stack

/*
In order to create a stack with a linked list in JavaScript, you would need to create two classes.
A Node class to represent the individual nodes in the linked list.
A LinkedList class to manage the nodes.
*/

//Example Implementation:
class Node {
    // // This creates a Node class, which represents a node in the linked list. Each node has a data property to hold the value of the node, and a next property to point to the next node in the list. The next property is initialized to null.
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }
    
    class LinkedList {
    // This is another class declaration for a LinkedList class. The LinkedList class uses Node objects to create a list of data. A LinkedList has two properties: head which stores the reference to the first Node object in the list, and size which is the number of elements in the list.
      constructor() {
        this.head = null;
        this.size = 0;
      }
    
      addFirst(data) {
    // The addFirst method adds a new Node object to the beginning of the list
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
      }
    
      removeFirst() {
    // the removeFirst method removes the first Node object from the list.
        if (this.head === null) {
          return null;
        }
        let node = this.head;
        this.head = this.head.next;
        this.size--;
        return node.data;
      }
    }
    
    class Stack {
    // This is the Stack class that uses the LinkedList class to implement a stack data structure. The Stack class has three properties: list is an instance of the LinkedList class, maxSize is the maximum number of elements the stack can hold, and currentSize is the number of elements currently in the stack.
      constructor() {
        this.list = new LinkedList();
        this.maxSize = 5;
        this.currentSize = 0;
      }
    
      push(data) {
    // The push method adds an element to the top of the stack. If the Stack is full, it throws a Stack overflow error. 
        if (this.currentSize >= this.maxSize) {
          throw new Error("Stack overflow");
        }
        this.list.addFirst(data);
        this.currentSize++;
      }
    
      pop() {
    // The pop method removes and returns the top element from the stack. If the Stack is empty, it returns null.
        if (this.currentSize === 0) {
          return null;
        }
        let data = this.list.removeFirst();
        this.currentSize--;
        return data;
      }
    
      peek() {
    // The peek method returns the data value of the top node in the stack, or null if the stack is empty.
        if (this.currentSize === 0) {
          return null;
        }
        return this.list.head.data;
      }
    
      isEmpty() {
    // The isEmpty method returns true if the stack is empty, or false otherwise.
        return this.currentSize === 0;
      }
    
      isFull() {
    // The isFull method returns true if the Stack is full and false otherwise. 
        return this.currentSize === this.maxSize;
      }
    
      size() {
    // The size method returns the number of elements in the Stack. 
        return this.currentSize;
      }
    
      clear() {
    //  The clear method empties the stack
        this.list = new LinkedList();
        this.currentSize = 0;
      }
    }

/*
The Node class represents an individual node in the linked list
The LinkedList class manages the nodes and provides methods for adding and removing nodes.
The Stack class uses an instance of the LinkedList class to manage the stack.
The push() method adds a new node to the top of the stack by calling the addFirst() method of the LinkedList class.
The pop() method removes the top node from the stack by calling the removeFirst() method of the LinkedList class.
The peek() method returns the data of the top node without removing it.
The isEmpty() method returns true if the stack is empty, and the isFull() method returns true if the stack has reached its maximum size.
The size() method returns the current size of the stack, and the clear() method removes all nodes from the stack.
*/

//Key things to remember about stacks:
/*
1 LIFO Principle: Stacks follow the Last In First Out (LIFO) principle, which means that the last element added to the stack is the first one to be removed.
2 Basic Operations: Stacks support two main operations: push, which adds an element to the top of the stack, and pop, which removes the element from the top of the stack.
3 Implementation: Stacks can be implemented using various data structures, such as arrays or linked lists. In JavaScript, arrays are a common choice for implementing stacks.
4 Use Cases: Stacks are useful for managing function calls, tracking undo/redo operations in software, and parsing expressions.
5 Time and Space Complexity: The time complexity of push and pop operations is O(1) since the operations only involve adding or removing an element from the top of the stack.
  The space complexity of a stack depends on its implementation, but for arrays, it is O(n), where n is the number of elements in the stack.
6 Stack Overflow: Stacks have a finite size, which means that they can become full. If you try to push an element onto a full stack, it will result in a stack overflow error.
*/