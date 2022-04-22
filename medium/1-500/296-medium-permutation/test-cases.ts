type Permutation<T, U = T> =
  [T] extends [never] ? [] :
  T extends U ? [T, ...Permutation<Exclude<U, T>>] : []

type test = Permutation<'A' | 'B' | 'C'>


type t = Exclude<'A', 'A'>

type isNever1<T> = T extends never ? 1 : 2 // ❎
type isNever2<T> = [T] extends [never] ? 1 : 2 // ✅ 

type test1 = isNever1<never>
type test2 = isNever2<never>

// 判断是不是 never 要加 []