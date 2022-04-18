// type isNever<T> = [T] extends [never] ? ([never] extends [T] ? true : false) : false

// type MyReadonly2<T, K extends keyof T = never> =
//   isNever<K> extends true
//   ? Readonly<T>
//   : {
//     [key in Exclude<keyof T, K>]: T[key];
//   } & {
//     readonly [key in K]: T[key];
//   }

type MyReadonly2<T, K extends keyof T = keyof T> =
  Omit<T, K> & Readonly<Pick<T, K>>

// 1. T 中排除 K
// 2. T 中选择 K 加上 readonly
// 3. 两者合并
// 4. 关于 K 可选参数，方案是给 K 加上默认值，keyof T

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

type t = MyReadonly2<Todo1, 'title' | 'description'>
type t2 = MyReadonly2<Todo1>

