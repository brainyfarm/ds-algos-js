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

  isFull() {
    return Object.is(this.queue.length, this.MAX_SIZE);
  }

  isEmpty () {
    return Object.is(this.queue.length, 0);
  }

}

const myTodos = new Queue(5);
myTodos.isEmpty(); //true

myTodos.enqueue("Wake up");
myTodos.enqueue("Brush my teeth");
myTodos.enqueue("Take my bath");
myTodos.enqueue("Put on clothes");
myTodos.enqueue("Head to work");

myTodos.peek(); // 'Wake up'
myTodos.dequeue(); // 'Wake up'
myTodos.peek(); // 'Brush my teeth'
