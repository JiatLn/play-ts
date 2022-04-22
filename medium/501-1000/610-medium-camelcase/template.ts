type CamelCase<S extends string> =
  S extends `${infer a}-${infer s}${infer rest}`
  ? (
    // '-' 后面是 '-'，不用去掉，把后面的 '-' 和 rest 一起继续递归
    s extends '-' ? `${a}-${CamelCase<`-${rest}`>}` :
    // '-' 后面是 大写字母，不用去掉
    s extends Uppercase<s> ? `${a}-${s}${CamelCase<rest>}`
    :
    `${a}${Uppercase<s>}${CamelCase<rest>}`
  ) : S

type test = CamelCase<'foo--bar----baz'>