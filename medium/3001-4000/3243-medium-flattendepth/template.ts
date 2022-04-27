type FlattenDepth<T extends any[], Deep = 1, CurrDeep extends any[] = []> =
  CurrDeep['length'] extends Deep ? T :
  CurrDeep['length'] extends T['length'] ? T :
  FlattenDepth<Flatten<T>, Deep, [...CurrDeep, any]>


type Flatten<T extends any[]> =
  T extends [infer F, ...infer R]
  ? F extends any[] ? [...F, ...Flatten<R>] : [F, ...Flatten<R>]
  : T


type test1 = FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>
type test2 = FlattenDepth<[1, [2, [3, [4, [5]]]]], 999999999>