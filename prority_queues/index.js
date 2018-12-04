class Queue {
  constructor(size) {
    this.queue = [];
    this.MAX_SIZE = size;
  }

  enqueue(item) {
    if (this.isFull())
      throw Error("Queue is full")
    this.queue.unshift(item)
  }

  dequeue() {
    if (this.isEmpty())
      return;
    return this.queue.pop();
  }

  peek() {
    if (this.isEmpty())
      return;
    return this.queue[this.queue.length -1]
  }

  get length() {
    return this.queue.length;
  }

  isFull() {
    return Object.is(this.queue.length, this.MAX_SIZE);
  }

  isEmpty() {
    return Object.is(this.queue.length, 0);
  }
}

class PriorityQueue {
  constructor(hpMaxSize, lpMaxSize) {
    this.hpQueue = new Queue(hpMaxSize);
    this.lpQueue = new Queue(lpMaxSize);
  }

  enqueue(item, isHighPriority) {
    isHighPriority ?
      this.hpQueue.enqueue(item):
      this.lpQueue.enqueue(item)
  }

  dequeue() {
    return this.hpQueue.isEmpty() ?
      this.lpQueue.dequeue():
      this.hpQueue.dequeue();
  }
  peek() {
    return this.hpQueue.isEmpty() ?
      this.lpQueue.peek():
      this.hpQueue.peek();
  }

  get length() {
    return this.hpQueue.length + this.lpQueue.length;
  }

  isEmpty() {
    return Object.is(this.length, 0);
  }
}

const myPriorityTasks = new PriorityQueue(2, 3);

myPriorityTasks.enqueue("Feature #1");
myPriorityTasks.enqueue("Feature #2");
myPriorityTasks.enqueue("Bug #1", true);
myPriorityTasks.enqueue("Feature #3");

myPriorityTasks.dequeue(); // Bug #1
myPriorityTasks.dequeue(); // 'Feature #1'
