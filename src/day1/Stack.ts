type Node<T> = {
  value: T
  // just to easy to visualize it
  prev?: Node<T>
}

export default class Stack<T> {
  public length: number
  private head?: Node<T>

  constructor() {
    this.head = undefined
    this.length = 0
  }

  push(item: T): void {
    // create a node
    const node = { value: item } as Node<T>

    this.length++
    if (!this.head) {
      this.head = node
      return
    }

    // update the head to point to the new node
    // and update the new node to point to the old head
    node.prev = this.head
    this.head = node
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1)
    // if we have no head we cannot pop
    if (this.length === 0) {
      const head = this.head
      this.head = undefined
      return head?.value
    }

    // detach the head from the list
    const head = this.head as Node<T>
    this.head = head.prev

    return head.value
  }
  peek(): T | undefined {
    // just check what is in the head
    // if have value return it, if not return undefined
    return this.head?.value
  }
}
