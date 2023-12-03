//Introduction to Heaps 

//What is a Heap?
/*Notes

*/  

//Why use a Heap?
/*Notes

*/  

//Are Heaps Important in JavaScript?
/*Notes

*/ 

//Building a Priority Queue with a Heap
/*Notes

*/ 
//Example Implementation:
// This class represents a priority queue, implemented using a heap.
class PriorityQueue {
    // The constructor function takes an optional comparator function, which is used to determine
    // the order in which elements are dequeued. If no comparator is provided, the default order
    // is ascending order.
    constructor(comparator = (a, b) => a - b) {
      // Create an empty heap to store the elements of the priority queue.
      this.heap = [];
  
      // Store the comparator function, which will be used to compare elements and determine the
      // order in which they are dequeued.
      this.comparator = comparator;
    }
  
    // Return the number of elements in the priority queue.
    size() {
      return this.heap.length;
    }
  
    // Return true if the priority queue is empty, false otherwise.
    isEmpty() {
      return this.heap.length === 0;
    }
  
    // Return the highest-priority element in the priority queue (the element that would be dequeued
    // next). If the priority queue is empty, return undefined.
    peek() {
      return this.heap[0];
    }
  
    // Enqueue a new element in the priority queue.
    enqueue(value) {
      // Add the new element to the end of the heap.
      this.heap.push(value);
  
      // Bubble up the new element to its correct position in the heap.
      this.bubbleUp(this.heap.length - 1);
    }
  
    // Dequeue the highest-priority element from the priority queue and return it. If the priority
    // queue is empty, return undefined.
      dequeue() {
      // If the queue is empty, return null
      if (this.size() === 0) {
        return null;
      }
      // Otherwise, remove the top element and replace it with the last element
      const result = this.heap[0];
      const end = this.heap.pop();
      // If there are still elements in the queue, re-heapify to maintain the heap property
      if (this.size() > 0) {
        this.heap[0] = end;
        this.bubbleDown(0);
      }
      return result;
    }
  
    bubbleUp(index) {
      // While the current index is not the root
      while (index > 0) {
        // Compute the parent index and compare the current element with its parent
        const parentIndex = Math.floor((index + 1) / 2) - 1;
        if (this.comparator(this.heap[index], this.heap[parentIndex]) < 0) {
          // If the current element is smaller, swap it with its parent
          const tmp = this.heap[parentIndex];
          this.heap[parentIndex] = this.heap[index];
          this.heap[index] = tmp;
          index = parentIndex;
        } else {
          // If the current element is larger or equal, stop bubbling up
          break;
        }
      }
    }
  
    bubbleDown(index) {
      while (true) {
        // Compute the indices of the left and right children
        const leftChildIndex = 2 * (index + 1) - 1;
        const rightChildIndex = 2 * (index + 1);
        // Find the smallest child (if it exists) and compare it with the current element
        let minIndex = index;
        if (leftChildIndex < this.size() && this.comparator(this.heap[leftChildIndex], this.heap[minIndex]) < 0) {
          minIndex = leftChildIndex;
        }
        if (rightChildIndex < this.size() && this.comparator(this.heap[rightChildIndex], this.heap[minIndex]) < 0) {
          minIndex = rightChildIndex;
        }
        if (minIndex !== index) {
          // If the smallest child is smaller than the current element, swap them and continue bubbling down
          const tmp = this.heap[minIndex];
          this.heap[minIndex] = this.heap[index];
          this.heap[index] = tmp;
          index = minIndex;
        } else {
          // If the current element is smaller than both children, stop bubbling down
          break;
        }
      }
    }
  }
/*Notes

*/ 

/*Notes

*/ 
//Example Implementation:
const pq = new PriorityQueue((a, b) => b - a);
pq.enqueue(3);
pq.enqueue(5);
pq.enqueue(1);
pq.enqueue(4);
console.log(pq.dequeue()); // 5
console.log(pq.dequeue()); // 4
console.log(pq.dequeue()); // 3
console.log(pq.dequeue()); // 1
/*Notes

*/ 

//Common Question
/*Notes

*/ 

//Compare and Contrast: Stacks, Queues, and Heaps
/*Notes

*/ 