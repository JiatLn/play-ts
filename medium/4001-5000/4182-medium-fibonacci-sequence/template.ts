// type Fibonacci<T extends number, U = []> =
//   T extends 1 ? 1 :
//   T extends 2 ? 1 :
//   Add<Fibonacci<MinuesOne<T>>, Fibonacci<MinuesTwo<T>>>

// type Add<T extends number, U extends number> =
//   [...NArray<T>, ...NArray<U>]['length']

// type MinuesN<T extends number, U extends number> =
//   NArray<T> extends [...infer P, ...NArray<U>] ? P['length'] : 0

// type MinuesOne<T extends number> = MinuesN<T, 1>
// type MinuesTwo<T extends number> = MinuesN<T, 2>

// type NArray<T extends number, U extends any[] = []> =
//   U['length'] extends T ? U : NArray<T, [...U, any]>


type Fibonacci<T extends number, CurrentIndex extends any[] = [1], Current extends any[] = [any], Prev extends any[] = []> =
  T extends CurrentIndex['length']
  ? Current['length']
  : Fibonacci<T, [...CurrentIndex, 1], [...Prev, ...Current], Current>


type test = Fibonacci<20>