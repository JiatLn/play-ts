/*
  5117 - Without
  -------
  by Pineapple (@Pineapple0919) #medium #union #array
  
  ### Question
  
  Implement the type version of Lodash.without, Without<T, U> takes an Array T, number or array U and returns an Array without the elements of U.
  
  ```ts
  type Res = Without<[1, 2], 1>; // expected to be [2]
  type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
  type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
  ```
  
  > View on GitHub: https://tsch.js.org/5117
*/

/* _____________ Your Code Here _____________ */

type Without<T extends any[], U extends any> =
  U extends any[] ? WithoutArray<T, U> : WithoutArray<T, [U]>

type WithoutArray<T extends any[], U extends any[], Ans extends any[] = []> =
  T extends [infer F, ...infer Rest]
  ? isInclude<U, F> extends false ? WithoutArray<Rest, U, [...Ans, F]> : WithoutArray<Rest, U, Ans>
  : Ans

type isInclude<T extends any, N> = T extends [infer F, ...infer Rest] ? F extends N ? true : isInclude<Rest, N> : false

type test = Without<[1, 2, 4, 1, 5], 1>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5117/answer
  > View solutions: https://tsch.js.org/5117/solutions
  > More Challenges: https://tsch.js.org
*/
