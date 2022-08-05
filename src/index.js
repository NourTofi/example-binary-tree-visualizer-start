import { BinaryTreeNode, drawBinaryTree } from 'binary-tree-visualizer';

const root = new BinaryTreeNode(10);
drawBinaryTree(root, document.querySelector('canvas'));

const left = new BinaryTreeNode(3);
drawBinaryTree(left, document.querySelector('canvas'));

const right = new BinaryTreeNode(2);
drawBinaryTree(right, document.querySelector('canvas'));
