// type AllCombinations<S extends string, T extends string = ''> =
//   S extends `${infer a}${infer b}`
//   ? AllCombinations<b, `${a}` | `${T}` | `${a}${T}` | `${T}${a}`>
//   : T

// https://github.com/type-challenges/type-challenges/issues/5339
type String2Array<S extends string, N extends any[] = []>
  = S extends `${infer a}${infer b}` ? String2Array<b, [...N, a]> : N

type String2Union<S extends string> =
  S extends `${infer C}${infer REST}`
  ? C | String2Union<REST>
  : never;

type test1 = String2Union<'ABC'>
type test2 = AllCombinations<'ABCD'>

type AllCombinations<S extends string, U extends string = String2Union<S>> =
  [U] extends [never]
  ? ''
  : '' | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}` }[U]





