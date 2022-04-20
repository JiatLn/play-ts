type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends '' ? S :
  S extends `${infer s}${From}${infer e}`
  // 这里递归要递归其它字符串，已匹配的不能再次计算
  ? `${ReplaceAll<s, From, To>}${To}${ReplaceAll<e, From, To>}`
  : S

type t = ReplaceAll<'foobarfoobar', 'ob', 'b'>