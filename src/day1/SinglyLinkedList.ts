export default class SinglyLinkedList<T> {
    public length: number;



    constructor() {
    }

    prepend(item: T): void {
        return undefined
    }
    insertAt(item: T, idx: number): void {
        return undefined
    }
    append(item: T): void {
        return undefined
    }
    remove(item: T): T | undefined {
        return undefined

    }
    get(idx: number): T | undefined {
        return undefined
    }
    removeAt(idx: number): T | undefined {
        return undefined
    }
}

// Time and complexity ===========
// prepend: O(1)
// insertAt: O(n)
// deletion from end: O(n)
// getHead: O(1)
// getTail: O(n)
// get: O(n)