type DropChar<S extends string, C extends string> =
  S extends `${infer a}${infer b}`
  ? a extends C ? DropChar<b, C> : `${a}${DropChar<b, C>}`
  : S



type test = DropChar<'butter fly!', ' '>