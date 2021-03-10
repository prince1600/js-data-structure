class Queue {
    constructor(){
        this.items = {}
        this.count = 0
        this.low = 0
    }

    enqueue(...items) {
        items.forEach(item => {
            this.items[this.count] = item
            this.count++
        })
    }
    
    dequeue() {
        if (this.isEmpty()) return undefined
        const val = this.items[this.low]
        Reflect.deleteProperty(this.items, this.low)
        this.low++
        return val
    }

    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.low]
    }

    size() {
        return this.count - this.low
    }

    isEmpty() {
        return this.size === 0
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