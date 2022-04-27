type Reverse<T extends any[]> =
  T extends [infer F, ...infer Rest] ? [...Reverse<Rest>, F] : T



type test = Reverse<['a', 'b', 'c']>