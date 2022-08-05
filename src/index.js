import { BinaryTreeNode, drawBinaryTree } from 'binary-tree-visualizer';

const root = new BinaryTreeNode(100);
drawBinaryTree(root, document.querySelector('canvas'));
