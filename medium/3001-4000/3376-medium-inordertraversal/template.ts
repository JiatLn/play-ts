interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
// type InorderTraversal<T extends TreeNode | null, U extends TreeNode = NonNullable<T>> =
//   T extends TreeNode ?
//   [...InorderTraversal<U['left']>, U['val'], ...InorderTraversal<U['right']>]
//   : []

type InorderTraversal<T extends TreeNode | null> =
  [T] extends [TreeNode] ?
  [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
  : []

// 不能用 T extends TreeNode
// 而是要用 [T] extends [TreeNode] 来判断终止条件
// why???