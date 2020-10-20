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

  while (queue.length){
      node = queue.shift();
      visited.push(node.data);
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
  }
return visited


  }
  module.exports = {
    Node,
    BST
  }