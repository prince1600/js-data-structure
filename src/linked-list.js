class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}

class LinkedList {
    constructor() {
        this.head = undefined
        this.count = 0
    }
   
    push(element) {
        const node = new Node(element)
        let current
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    removeAt(index) {
        if (index < 0 && index >= this.count) return undefined
        let current = this.head
        let previous
        if (index === 0) {
            this.head = current.next
        } else {
            previous = this.getElementAt(index - 1)
            current = previous.next
            previous.next = current
        }
        this.count--
        return current.element
    }

    getElementAt(index) {
        if (index >=0 && index < this.count) {
            let node = this.head
            for (let i = 0; i < index; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)
            let current = this.head
            if (index === 0) {
                node.next = current
                this.head = node
            } else {
                let previous = this.getElementAt(index - 1)
                current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }

    indexof(element) {
        let current = this.head
        for (let i = 0; i < this.count; i++) {
            if (current.element === element) return i
            current = current.next
        }
        return -1
    }

    remove(element) {
        const index = this.indexof(element)
        return this.removeAt(index)
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.size === 0
    }

    getHead() {
        return this.head
    }
}
