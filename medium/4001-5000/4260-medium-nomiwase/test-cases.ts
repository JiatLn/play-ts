type AllCombinations<S extends string, PRE extends string = ''> =
  S extends `${infer a}${infer b}`
  ?
  | `${a}${AllCombinations<`${PRE}${b}`>}`
  | AllCombinations<b, `${PRE}${a}`>
  : ''

// https://github.com/type-challenges/type-challenges/issues/5339
type String2Array<S extends string, N extends any[] = []>
  = S extends `${infer a}${infer b}` ? String2Array<b, [...N, a]> : N

type String2Union<S extends string> =
  S extends `${infer C}${infer REST}`
  ? C | String2Union<REST>
  : never;

type test1 = String2Union<'ABC'>
type test2 = AllCombinations<'ABC'>


// type AllCombinations<S extends string, U extends string = String2Union<S>> =
//   [U] extends [never]
//   ? ''
//   : '' | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}` }[U]


type UnionAllCombinations<S extends string> = [S] extends [never] ? ''
  : '' | { [K in S]: `${K}${UnionAllCombinations<Exclude<S, K>>}` }[S]

// type AllCombinations<S extends string> = UnionAllCombinations<String2Union<S>>



