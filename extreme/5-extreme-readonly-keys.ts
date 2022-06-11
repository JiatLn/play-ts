/*
  5 - Get Readonly Keys
  -------
  by Anthony Fu (@antfu) #extreme #utils #object-keys
  
  ### Question
  
  Implement a generic `GetReadonlyKeys<T>` that returns a union of the readonly keys of an Object.
  
  For example
  
  ```ts
  interface Todo {
    readonly title: string
    readonly description: string
    completed: boolean
  }
  
  type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
  ```
  
  > View on GitHub: https://tsch.js.org/5
*/


/* _____________ Your Code Here _____________ */

type GetReadonlyKeys<T extends Record<string, any>> = keyof {
  [P in keyof T as P extends keyof T
  ? MyEqual<Pick<T, P>, Readonly<Pick<T, P>>> extends true
  ? P
  : never
  : never
  ]
  : T[P]
}

type MyEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

type test = GetReadonlyKeys<Todo2>

type test3 = { readonly completed: boolean } extends { completed: boolean } ? 1 : 2 // 1
type test4 = { completed: boolean } extends { readonly completed: boolean } ? 1 : 2 // 1

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5/answer
  > View solutions: https://tsch.js.org/5/solutions
  > More Challenges: https://tsch.js.org
*/

