type MyAwaited<V extends Promise<any>> = V extends Promise<infer T>
  ? (T extends Promise<any> ? MyAwaited<T> : T)
  : never

// 判断 V 是不是 Promise<any> 是的话取出里面的类型 T，否则返回 never
// 取出值后，在判断取出的类型 T 是不是 Promise<any>，是的话递归下去，否则返回该类型 T


type X = Promise<string>
type Z = Promise<Promise<string | number>>

type XX = MyAwaited<X>
type ZZ = MyAwaited<Z>