/*
  8767 - Combination
  -------
  by Homyee King (@HomyeeKing) #medium #array #application #string
  
  ### Question
  
  Given an array of strings, do Permutation & Combination.
  It's also useful for the prop types like video [controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList)
  
  ```ts
  // expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
  type Keys = Combination<['foo', 'bar', 'baz']>
  ```
  
  > View on GitHub: https://tsch.js.org/8767
*/


/* _____________ Your Code Here _____________ */

// https://github.com/type-challenges/type-challenges/issues/11027
// TODO: understand it
type Combination<T extends string[], Item = T[number], Union = Item> =
  Item extends infer Item
  ? Item | `${Item & string} ${Combination<[], Exclude<Union, Item>> & string}`
  : never

type test1 = ['foo', 'bar', 'baz']
type test2 = Exclude<'foo' | 'bar', 'foo'>
type test3 = test1[number]
type test4 = test3 extends infer Item ? `${Item & string} ${Item & string}` : never
type test5 = Combination<test1>
type test6<T extends string[], Item = T[number], U = Item> =
  Item extends Item ? `${Item & string} ${Exclude<U, Item> & string}` : never
type test7 = test6<['1', '2', '3']>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
    'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8767/answer
  > View solutions: https://tsch.js.org/8767/solutions
  > More Challenges: https://tsch.js.org
*/

