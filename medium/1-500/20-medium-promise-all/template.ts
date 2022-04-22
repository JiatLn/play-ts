// declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<MapP<T>>

// type MapP<T extends any[]> =
//   T extends [infer F, ...infer Rest]
//   ? [F extends Promise<infer K> ? K : F, ...MapP<Rest>]
//   : T

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [key in keyof T]: T[key] extends Promise<infer P> ? P : T[key]
}>



const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type t1 = typeof promiseAllTest1
type t2 = typeof promiseAllTest2
type t3 = typeof promiseAllTest3


const foo = Promise.resolve(3)

type flag = typeof foo extends Promise<infer K> ? K : false




