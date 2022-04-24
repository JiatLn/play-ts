type PartialByKeys<T, K extends keyof any = keyof T> = MergeType<Partial<T> & Omit<T, K>>

// T extends any & any
type MergeType<T> = {
  [P in keyof T]: T[P]
}

// merge -> A & B -> C

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

type test = PartialByKeys<User, 'name' | 'age'>