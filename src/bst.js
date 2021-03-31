const CompareRst = {
    MORE_THAN: 1,
    EQUAL: 0,
    LESS_THAN: -1
}

function compareFn(x, y) {
    if (x > y) {
        return CompareRst.MORE_THAN
    } else if (x < y) {
        return CompareRst.LESS_THAN
    } else {
        return CompareRst.EQUAL
    }
}

class Node {
    constructor(key) {
        this.left = null
        this.right = null
        this.key = key
    }
}

class BinarySearchTree {
    constructor(compareFn) {
        this.root = new Node()
        this.compareFn = compareFn
    }

    insert(key) {
        this.insertNode(key, this.root)
    }

    insertNode(key, node) {
        if (node.key == null) {
            node.key = key
            return
        }
        const res = this.compareFn(key, node.key)
        if (res === CompareRst.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key)
            } else {
                this.insertNode(key, node.left)
            }
        } else if (res === CompareRst.MORE_THAN) {
            if (node.right == null) {
                node.right = new Node(key)
            } else (
                this.insertNode(key, node.right)
            )
        }
    }
    // 最小节点
    min() {
        return this.minNode(this.root)
    }

    minNode(node) {
        if (node != null) {
            if (node.left == null) {
                return node
            } else {
                return this.minNode(node.left)
            }
        } else {
            return null
        }
    }
    // 最大节点
    max() {
        return this.maxNode(this.root)
    }

    maxNode(node) {
        if (node != null) {
            if (node.right == null) {
                return node
            } else {
                return this.maxNode(node.right)
            }
        }else {
            return null
        }
    }
    // 中序遍历
    inOrderTraverse() {
        this.inOrderTraverseNode(this.root)
    }

    inOrderTraverseNode(node) {
        if (node == null) return
        this.inOrderTraverseNode(node.left)
        console.log(node.key)
        this.inOrderTraverseNode(node.right)
    }
    // 前序遍历
    preOrderTraverse() {
        this.preOrderTraverseNode(this.root)
    }

    preOrderTraverseNode(node) {
        if (node == null) return
        console.log(node.key)
        this.preOrderTraverseNode(node.left)
        this.preOrderTraverseNode(node.right)
    }
    // 后续遍历
    postOrderTraverse() {
        this.postOrderTraverseNode(this.root)
    }

    postOrderTraverseNode(node) {
        if (node == null) return
        this.postOrderTraverseNode(node.left)
        this.postOrderTraverseNode(node.right)
        console.log(node.key)
    }

    // 按key搜索
    search(key) {
        if (typeof key !== 'number') return false
        return this.searchNode(key, this.root)
    }

    searchNode(key, node) {
        if (node == null) return false
        const res = compareFn(key, node.key)
        if (res === CompareRst.EQUAL) return node
        if (res === CompareRst.LESS_THAN) {
            return this.searchNode(key, node.left)
        }
        if (res === CompareRst.MORE_THAN) {
            return this.searchNode(key, node.right)
        }
    }

    // delete by key
    delete(key) {
        this.root = this.deleteNode(key, this.root)
    }

    deleteNode(key, node) {
        if (node == null) return node
        const res = this.compareFn(key, node.key)
        if (res === CompareRst.LESS_THAN) {
            node.left = this.deleteNode(key, node.left)
            return node
        }
        if (res === CompareRst.MORE_THAN) {
            node.right = this.deleteNode(key, node.right)
            return node
        }

        // res === CompareRst.EQUAL
        if (node.left == null && node.right == null) { // 1. 左右子节点为空
            return null
        } else if (node.left == null) {  // 2. 左或右节点为空
            return node.right
        } else if (node.right == null) {
            return node.left
        } else {  // 3. 左右都不为空
            const rightMinKey = this.minNode(node.right).key
            node.key = rightMinKey
            node.right = this.deleteNode(rightMinKey, node.right)
            return node
        }
    }


}

// const bst = new BinarySearchTree(compareFn)
// bst.insert(11)
// bst.insert(7)
// bst.insert(15)
// bst.insert(5)
// bst.insert(3)
// bst.insert(9)
// bst.insert(8)
// bst.insert(10)
// bst.insert(13)
// bst.insert(12)
// bst.insert(14)
// bst.insert(20)
// bst.insert(18)
// bst.insert(25)
// bst.insert(6)

// console.log(bst.root)
// console.log(bst.min())
// console.log(bst.max())
// console.log('in:')
// bst.inOrderTraverse()
// console.log('pre:')
// bst.preOrderTraverse()
// console.log('post:')
// bst.postOrderTraverse()

// console.log(bst.search(3))
// bst.delete(7)
// console.log('delete' ,bst.root)
// bst.inOrderTraverse()

module.exports = BinarySearchTree
