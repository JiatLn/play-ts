/*
  151 - Query String Parser
  -------
  by Pig Fang (@g-plane) #extreme #template-literal
  
  ### Question
  
  You're required to implement a type-level parser to parse URL query string into a object literal type.
  
  Some detailed requirements:
  
  - Value of a key in query string can be ignored but still be parsed to `true`. For example, `'key'` is without value, so the parser result is `{ key: true }`.
  - Duplicated keys must be merged into one. If there are different values with the same key, values must be merged into a tuple type.
  - When a key has only one value, that value can't be wrapped into a tuple type.
  - If values with the same key appear more than once, it must be treated as once. For example, `key=value&key=value` must be treated as `key=value` only.
  
  > View on GitHub: https://tsch.js.org/151
*/


/* _____________ Your Code Here _____________ */

type ParseQueryString<
  T extends string,
  U extends string[] = SplitQueryString<T>,
  R extends {} = {}
  > =
  U['length'] extends 0
  ? R
  : U extends [infer F, ...infer Rest]
  ? ParseQueryString<T, Rest & string[], ParseStringKV<F & string>>
  : R & ParseStringKV<U & string
  >

// 'A&B' -> ['A', 'B']
type SplitQueryString<T extends string, U extends string[] = []> =
  T extends `${infer A}&${infer B}` ? SplitQueryString<B, [...U, A]> : T extends '' ? U : [...U, T]

// 'K=V' -> { K : V }
type ParseStringKV<T extends string> =
  T extends '' ? never :
  T extends `${infer key}=${infer value}`
  ? Record<key, value>
  : Record<T, true>

type test = SplitQueryString<'k1=v1&k1=v2'>
type test1 = ParseQueryString<'k1=v1&k1=v2'>
type test2 = ParseStringKV<'k1=v1'>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ParseQueryString<''>, {}>>,
  Expect<Equal<ParseQueryString<'k1'>, { k1: true }>>,
  Expect<Equal<ParseQueryString<'k1&k1'>, { k1: true }>>,
  Expect<Equal<ParseQueryString<'k1&k2'>, { k1: true; k2: true }>>,
  Expect<Equal<ParseQueryString<'k1=v1'>, { k1: 'v1' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k1=v2'>, { k1: ['v1', 'v2'] }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2=v2'>, { k1: 'v1'; k2: 'v2' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2=v2&k1=v2'>, { k1: ['v1', 'v2']; k2: 'v2' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2'>, { k1: 'v1'; k2: true }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k1=v1'>, { k1: 'v1' }>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/151/answer
  > View solutions: https://tsch.js.org/151/solutions
  > More Challenges: https://tsch.js.org
*/

