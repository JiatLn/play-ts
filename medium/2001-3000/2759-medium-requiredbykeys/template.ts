type RequiredByKeys<T, K extends keyof any = keyof T> =
  MergeType<Omit<T, K> &
    {
      [P in keyof T as P extends K ? P : never]-?: T[P]
    }
  >

type MergeType<T> = {
  [P in keyof T]: T[P]
}

interface User {
  name?: string
  age?: number
  address?: string
}

type test = RequiredByKeys<User, 'name'>