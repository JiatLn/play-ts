type FlipArguments<T extends Function> =
  T extends (...args: infer P) => infer R ? (...args: Reverse<P>) => R : never


type Reverse<T extends any[]> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : T


type test = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>