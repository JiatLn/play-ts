// type Flip<T> = {
//   [P in keyof T as
//   T[P] extends PropertyKey ? T[P]
//   : T[P] extends boolean ? `${T[P]}`
//   : never]: P
// }

type Flip<T extends Record<string, string | number | boolean>> = {
  [P in keyof T as `${T[P]}`]: P
}


type test = Flip<{ pi: 3.14; bool: true }>