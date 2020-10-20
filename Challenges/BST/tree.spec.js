const {Node, BST} = require('./tree.js')

describe('Node', ()=>{
  test('is a Constructor', ()=>{
    expect(typeof Node).toEqual('function')
  })
})

describe('BST', ()=>{
  test('is a Constructor', ()=>{
    expect(typeof BST).toEqual('function')
  })
  test('properly adds nodes', ()=>{
      const tree = new BST()
      tree.insert(8)
      tree.insert(13)
      tree.insert(5)
      expect(tree.root.left.data).toEqual(5)
      expect(tree.root.right.data).toEqual(13)
  })
})