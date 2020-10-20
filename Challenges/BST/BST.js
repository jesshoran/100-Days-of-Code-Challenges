
// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.


class Node {
    constructor(data, name) {
        this.data = data;
        this.name = name;
        this.children = []
    }

}

const html = new Node('nothing', 'html')
const body = new Node('stuff', 'body')
const head = new Node('hello', 'head')
const test = new Node('yo', 'test')

html.children.push(body)
html.children.push(head)

console.log(html)


