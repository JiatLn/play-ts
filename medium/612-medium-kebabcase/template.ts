type KebabCase<S extends string, isFirstChar = true> =
  S extends `${infer s}${infer right}`
  ? s extends Lowercase<s>
  ? `${s}${KebabCase<right, false>}`
  : isFirstChar extends true
  ? `${Lowercase<s>}${KebabCase<right, false>}`
  : `-${Lowercase<s>}${KebabCase<right, false>}`
  : S


// type test = KebabCase<'FooBarBaz'>

// type flag = '.' extends Uppercase<'.'> ? 1 : 2

