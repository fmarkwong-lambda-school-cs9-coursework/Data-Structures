class Heap {
  /* Do not modify the constructor */
  constructor() {
    this.storage = [];
  }

  /* Insert the given value into the heap.
  The heap should maintain the heap property 
  after insertion */
  insert(value) {
    this.storage.push(value);
    this.bubbleUp(this.storage.length -1);

  }

  /* Remove the maximal value from the heap and
  return it. The heap should maintain the heap
  property after removing the maximal value */
  delete() {
    const max = this.storage.shift();
    this.siftDown(0);
    return max;
  }

  /* Return the maximal value in the heap
  without removing it */
  getMax() {
    return this.storage[0];
  }

  /* Return the size of the heap */
  getSize() {
    return this.storage.length;
  }

  /* Moves the element at the specified index "up"
  the heap by swapping it with its parent if its
  parent value is less than the value located at
  the input index */
  bubbleUp(index) {
    const parent = this.storage[Math.floor((index - 1) / 2)];
    const child = this.storage[index];

    if (child > parent) {
      this.storage[Math.floor((index - 1) / 2)] = child;
      this.storage[index] = parent;
      return this.bubbleUp(Math.floor((index - 1) /2));
    }

  }

  /* Move the element at the specified index "down"
  the heap by swapping it with its larger child if its
  child's value is greater than the value located at
  the input index */
  siftDown(index) {
    const parent = this.storage[index];
    const leftChild = this.storage[index * 2 + 1];
    const rightChild = this.storage[index * 2 + 2];
    const largestChild = leftChild > rightChild ? leftChild : rightChild;

    if (largestChild > parent) {
      if (leftChild === largestChild) {
        this.storage[index * 2 + 1] = parent;
        this.storage[index] = leftChild;
      } else {
        this.storage[index * 2 + 2] = parent
        this.storage[index] = rightChild;
      }
    }
  }
}

module.exports = Heap;
