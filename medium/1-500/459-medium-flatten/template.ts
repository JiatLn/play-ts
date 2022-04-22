
type Flatten<T extends any[]> =
  T extends [infer First, ...infer Rest] ?
  First extends any[] ? [...Flatten<First>, ...Flatten<Rest>]
  : [First, ...Flatten<Rest>]
  : T


type test = 'A' extends any[] ? 1 : 2