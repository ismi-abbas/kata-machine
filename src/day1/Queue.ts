type Node<T> = {
  value: T
  next?: Node<T>
}

export default class Queue<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  // add to the queue
  enqueue(item: T): void {
    const node = { value: item } as Node<T>
    this.length++
    // can do with the this.length === 0 in javascript
    if (!this.tail) {
      this.tail = this.head = node
      return
    }

    this.tail = this.tail.next = node
    this.tail = node
  }

  // remove from the queue
  deque(): T | undefined {
    // if we have no head we cannot dequeue
    if (!this.head) {
      return undefined
    }

    this.length--
    // update head to next node and return value of head
    const head = this.head
    this.head = this.head.next
    // free - just cleaning up the memory
    head.next = undefined

    if (this.length === 0) {
      this.tail = undefined
    }

    return head.value
  }

  peek(): T | undefined {
    // if head is undefined, return undefined, if not return head.value (which is T)
    return this.head?.value
  }
}

const queue = new Queue<string>()
console.log(queue)
queue.enqueue('Abbas')
queue.enqueue('Ali')
queue.deque()
console.log(queue)
console.log(queue.peek())

