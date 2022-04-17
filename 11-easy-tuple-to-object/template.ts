type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [key in T[number]]: key
}

const tuple = ['a', 'b', 'c'] as const;


// 把 tuple 转为 obj，obj 的 key 和 value 都是 tuple 里面的元素
let vv: TupleToObject<typeof tuple> = {
  'a': 'a',
  'b': 'b',
  'c': 'c',
}

type t2o = TupleToObject<typeof tuple>

// 遍历数组 key in T[number]
// 对象的键值只能为 string 或 number 或 symbol
