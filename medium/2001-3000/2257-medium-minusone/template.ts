// type MinusOne<T extends number, U extends number[] = []> =
//   U['length'] extends T
//   ? U extends [infer first, ...infer Rest] ? Rest['length'] : 0
//   : MinusOne<T, [1, ...U]>

type Digital = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type MakeDigitalArray<
  N extends Digital,
  T extends any[] = []
  > = N extends `${T['length']}` ? T : MakeDigitalArray<N, [...T, 0]>

// 数组长度 * 10
type Multiply10<T extends any[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]

type ToArray<
  S extends number | string,
  T extends any[] = []
  > = `${S}` extends `${infer F}${infer L}`
  ? F extends Digital
  ? ToArray<L, [...Multiply10<T>, ...MakeDigitalArray<F>]>
  : never
  : T

// 23 -> 2 3 
// -> ToArray<3, [[], ...[1, 1]]>
// -> ToArray<never, [...[Multiply10<[1, 1]>], ...[1, 1, 1]]>

type Minus<
  S extends number,
  N extends number
  > = ToArray<S> extends [...ToArray<N>, ...infer L] ? L['length'] : 0

type MinusOne<S extends number> = Minus<S, 1>


type t = MinusOne<9999>
