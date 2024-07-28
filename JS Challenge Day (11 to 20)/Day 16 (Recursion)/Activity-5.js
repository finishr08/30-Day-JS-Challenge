/*
Activity 5: Tree Traversal (Optional)
Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
*/

// Task-9

function inOrderTraversal(node) {
  if (node === null) {
    return;
  }
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

// Example binary tree node structure
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
inOrderTraversal(root);

// Task-10

function treeDepth(node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(treeDepth(node.left), treeDepth(node.right));
}

const root2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.log(treeDepth(root2));
