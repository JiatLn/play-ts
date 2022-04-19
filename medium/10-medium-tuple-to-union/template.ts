type TupleToUnion<T extends any[]> = T[number]

// 元组 转 对象 再转 联合
// type TupleToUnion<T extends any[]> = keyof { [key in T[number]] }

// 递归版本
// type TupleToUnion<T extends any[]> =
//   T extends [infer F, ... infer Rest]
//   ? F | TupleToUnion<Rest>
//   : never