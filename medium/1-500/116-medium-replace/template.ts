type Replace<S extends string, From extends string, To extends string> =
  From extends '' ? S :
  S extends `${infer s}${From}${infer e}`
  ? `${s}${To}${e}`
  : S



type test = Replace<'foobarbar', 'bar', 'foo'>