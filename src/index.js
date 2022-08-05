import { BinaryTreeNode, drawBinaryTree } from 'binary-tree-visualizer';

const root = new BinaryTreeNode(10);
drawBinaryTree(root, document.querySelector('canvas'));

const left = new BinaryTreeNode(23);
drawBinaryTree(left, document.querySelector('canvas'));



const right = new BinaryTreeNode(53);
drawBinaryTree(right, document.querySelector('canvas'));
// Change in the file 