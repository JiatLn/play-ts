type TupleToNestedObject<T extends any[], U> =
  T extends [] ? U : {
    [P in T[0]]: TupleToNestedObject<Tail<T>, U>
  }

type Tail<T extends any[]> = T extends [infer F, ...infer R] ? R : []


type test = TupleToNestedObject<['a', 'b', 'c'], number>