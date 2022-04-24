type ObjectEntries<T, K = Required<T>, P = keyof K> =
  P extends keyof K
  ? [P, neverToUndefined<K[P]>]
  : never

type neverToUndefined<T> = [T] extends [never] ? undefined : T

// 1. change all properties of T to required as K
// 2. change K[P] from never to undefined

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type test = ObjectEntries<{ key?: undefined }>