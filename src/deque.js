class Deque {
    constructor() {
        this.items = {}
        this.count = 0
        this.low = 0
    }

    addBack(item) {
        this.items[this.count] = item
        this.count++
    }

    addFront(item) {
        if (this.isEmpty()) {
            return this.addBack(item)
        }
        this.low--
        this.items[this.low] = item
    }

    removeBack() {
        if (this.isEmpty()) return undefined
        Reflect.deleteProperty(this.items, this.count)
        this.count--
    }

    removeFront() {
        if (this.isEmpty()) return undefined
        Reflect.deleteProperty(this.items, this.low)
        this.low++
    }

    peekFront() {
        return this.items[this.low]
    }

    peekBack() {
        return this.items[this.count]
    }

    size() {
        return this.count - this.low
    }

    isEmpty() {
        return this.size() === 0
    }

    toString() {
        if (this.isEmpty()) return ''
        let objString = `${this.items[this.low]}`
        for (let i = this.low + 1; i < this.count; i++) {
            objString += `, ${this.items[i]}`
        }
        return objString
    }
}


const dq = new Deque()
console.log(dq.isEmpty());  // true
dq.addBack('John')
dq.addBack('Jack')
console.log(dq.toString());  // John, Jack
dq.addBack('Camila')
console.log(dq.toString()); // John, Jack, Camila
console.log(dq.size());  // 3
console.log(dq.isEmpty());  false
dq.removeFront()
console.log(dq.toString());  // Jack, Camila
dq.removeBack()
console.log(dq.toString());  // Jack
dq.addFront('John')
console.log(dq.toString());  // John, Jack
