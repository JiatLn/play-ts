type Includes<T extends readonly any[], U> =
  T extends [] ? false :
  T extends [infer First, ...infer Rest]
  ? (Equal<First, U> extends true
    ? true
    : Includes<Rest, U>)
  : false

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

