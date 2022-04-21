type LengthOfString<S extends string, N extends string[] = []> =
  S extends '' ? N['length'] :
  S extends `${infer first}${infer other}`
  ? LengthOfString<other, [...N, first]>
  : never