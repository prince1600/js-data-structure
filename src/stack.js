/* 
 *  1.基于数组
**/
// class Stack {
//     constructor(){
//         this.items = []
//     }

//     push(...elements) {
//         elements.forEach(item => this.items.push(item))
//     }

//     pop() {
//         return this.items.pop()
//     }

//     peak() {
//         return this.items[this.items.length - 1]
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     clear() {
//         this.items = []
//     }

//     size() {
//         return this.items.length
//     }
// }

/* 
 *  2.基于object
**/

class Stack {
    constructor() {
        this.items = {}
        this.size = 0
    }

    push(...items) {
        items.forEach(item => {
            this.items[this.size] = item
            this.size++
        })
    }

    pop() {
        if (this.isEmpty()) return undefined
        const value =  this.items[this.size - 1]
        Reflect.deleteProperty(this.items, this.size - 1)
        this.size--
        return value
    }

    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.size - 1]
    }

    isEmpty() {
        return this.size === 0
    }

    clear() {
        this.items = {}
        this.size = 0
    }

    // toString
    toString() {
        let objString = `${this.items[0]}`
        for (let i = 1; i < this.size; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}
