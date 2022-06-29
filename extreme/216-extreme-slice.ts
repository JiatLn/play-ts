/*
  216 - Slice
  -------
  by Anthony Fu (@antfu) #extreme #array
  
  ### Question
  
  Implement the JavaScript `Array.slice` function in the type system. `Slice<Arr, Start, End>` takes the three argument. The output should be a subarray of `Arr` from index `Start` to `End`. Indexes with negative numbers should be counted from reversely.
  
  For example
  
  ```ts
  type Arr = [1, 2, 3, 4, 5]
  type Result = Slice<Arr, 2, 4> // expected to be [3, 4]
  ```
  
  > View on GitHub: https://tsch.js.org/216
*/


/* _____________ Your Code Here _____________ */

type _Slice<Arr extends any[], Start extends number = 0, End = Arr['length'], Curr extends any[] = [], R extends any[] = []> =
  Curr['length'] extends Arr['length'] ? R
  : Compare<Start, Arr['length']> extends 0 | 1
  ? []
  : (Compare<Curr['length'], Start> extends 0 | 1
    ? (Curr['length'] extends End
      ? R
      : _Slice<Arr, Start, End, [...Curr, any], [...R, Arr[Curr['length']]]>)
    : _Slice<Arr, Start, End, [...Curr, any], R>
  )

type Slice<Arr extends any[], Start extends number = 0, End extends number = Arr['length'], Curr extends any[] = [], R extends any[] = []> =
  End extends 0 ? [] :
  _Slice<Arr, ParseIndex<Start, Arr['length']>, ParseIndex<End, Arr['length']>, Curr, R>

type Compare<A extends number, B extends number> =
  A extends B ? 0 :
  NTuple<A> extends [...infer F, ...NTuple<B>] ? 1 : 2

type NTuple<N extends number, T extends any[] = []> =
  T['length'] extends N ? T : NTuple<N, [...T, any]>


type test = Slice<Arr, 2, 10>

type IsNagetive<T extends number> = `${T}` extends `-${infer N}` ? true : false
type Nagetive2PostiveStr<T extends number> = `${T}` extends `-${infer N}` ? N : never
type Str2Num<T extends string, Curr extends any[] = []> = `${Curr['length']}` extends T ? Curr['length'] : Str2Num<T, [...Curr, any]>
type Nagetive2Postive<T extends number> = Str2Num<Nagetive2PostiveStr<T>>

type test2 = Nagetive2Postive<-3>

type GetIndex<T extends number, U extends number> = [...NTuple<U>] extends [...infer F, ...NTuple<T>] ? F['length'] : 0

type ParseIndex<T extends number, U extends number> =
  IsNagetive<T> extends true
  ? GetIndex<Nagetive2Postive<T>, U>
  : T

type test3 = ParseIndex<-1, 5>



/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Arr = [1, 2, 3, 4, 5]

type cases = [
  // basic
  Expect<Equal<Slice<Arr, 0, 1>, [1]>>,
  Expect<Equal<Slice<Arr, 0, 0>, []>>,
  Expect<Equal<Slice<Arr, 2, 4>, [3, 4]>>,

  // optional args
  Expect<Equal<Slice<[]>, []>>,
  Expect<Equal<Slice<Arr>, Arr>>,
  Expect<Equal<Slice<Arr, 0>, Arr>>,
  Expect<Equal<Slice<Arr, 2>, [3, 4, 5]>>,

  // negative index
  Expect<Equal<Slice<Arr, 0, -1>, [1, 2, 3, 4]>>,
  Expect<Equal<Slice<Arr, -3, -1>, [3, 4]>>,

  // invalid
  Expect<Equal<Slice<Arr, 10>, []>>,
  Expect<Equal<Slice<Arr, 1, 0>, []>>,
  Expect<Equal<Slice<Arr, 10, 20>, []>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/216/answer
  > View solutions: https://tsch.js.org/216/solutions
  > More Challenges: https://tsch.js.org
*/

