type Node<T> = {
    value: T
    next?: Node<T>
    prev?: Node<T>
}

export default class ArrayList<T> {
  public length: number
  private head?: Node<T>

  constructor() {
    this.length = 0
  }

  prepend(item: T): void {}
  insertAt(item: T, idx: number): void {}
  append(item: T): void {}
  remove(item: T): T | undefined {
    return
  }
  get(idx: number): T | undefined {
    let current = this.head
    for (let i = 0; i < idx && current; i++) {
        current = current.next
    }

    return current?.value
  }
  removeAt(idx: number): T | undefined {
    return
  }
}
