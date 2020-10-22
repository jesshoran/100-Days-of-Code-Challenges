/*
                            html
                       head                 body
                    title meta       header  aside main  footer
*/
// class Node {
//   constructor(data, name){
//     this.data = data
//     this.name = name
//     this.children = []
//   }
// }
//
//
// const html = new Node('nothing', 'html')
// const body = new Node('stuff', 'body')
// const head = new Node('stuff', 'head')
//
// html.children.push(body)
// html.children.push(head)
//
// console.log(html)



class Node {
    constructor(data){
      this.data = data
      this.left = null
      this.right = null
    }
  }
  class BST {
    constructor(){
      this.root = null
    }
      /*
  Each node can only have 2 children
  Each nodes left child is always smaller than parent
  Each righ node is always larger than the parent
  */

  insert(value){
      // Create a new node based on the value given to insert as an argument
      const newNode = new Node(value)
      //Then we are going to check and see if BST is empty, if it is we will make the insertion on the root
      /* Begin Root Insertion */
      if (this.root === null) {
          this.root = newNode
          return this;
      } 
          /* End Root Insertion */

          // Traverse the tree and check if the value is either larger or smaller than the value of each node
          //If it is smaller and the left slot is open on a particular node, we will insert in that position
          //if it is larger and the right slot is open on a particular node, we will insert it in that position
          //we will continue to look throught the tree until we find the correct open position

      let current = this.root;
      while(true){
          if(value === current.data) return undefined;
          if (value < current.data) {
              if (current.left === null) {
                  current.left = newNode;
                  return this;
              } 
              current = current.left
             } else {
                if(current.right === null){
                  current.right = newNode;
                  return this;
                }
                current = current.right
          }
      }
  }
  bfs(){
    let node = this.root,
      visited = [],
      queue =[];
  queue.push(node);

  while(queue.length){
    // console.log(`current node is : ${node.data}`)
    // console.log(queue.map(node => node.data))
    // console.log(visited)
    node = queue.shift();
    visited.push(node.data);
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
    console.log(queue.map(node => node.data))
    console.log(visited)
  }
  return visited;
  }

  dfsPost(){
    /*
    Make a variable that can house our visited nodes
    Store the root of the BST in variable
    Push the values of the node houses the visited nodes
    if the node has a left property recursively call pur function to travese the left
    if the node has a right value we are going to recursively traverse the right tree
    */
    const visited = []
    const traverse = (node)=> {
      if (node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      visited.push(node.data)
    }
    traverse(this.root)
    return visited
  }
  dfsIn(){
    /*
    Make a variable that can house our visited nodes
    Store the root of the BST in variable
    Push the values of the node houses the visited nodes
    if the node has a left property recursively call pur function to travese the left
    if the node has a right value we are going to recursively traverse the right tree
    */
    const visited = []
    const traverse = (node)=> {
      if (node.left) traverse(node.left)
      visited.push(node.data)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return visited
  }
}


module.exports = {
    Node,
    BST
  }
  const tree = new BST()
  tree.insert(9)
  tree.insert(6)
  tree.insert(15)
  tree.insert(3)
  tree.insert(8)
  tree.insert(20)
  console.log(tree.bfs(),
  tree.dfsPre(), tree.dfsPost(), tree.dfsIn())