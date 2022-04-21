type Merge<F, S> = {
  [key in keyof F | keyof S]:
  key extends keyof S
  ? S[key]
  : key extends keyof F ? F[key] : never
}

// keyof F | keyof S 
// can also be 
// keyof (F & S)

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = Merge<Foo, Bar>
