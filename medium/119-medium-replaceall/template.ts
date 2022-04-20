type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends '' ? S :
  S extends `${infer left}${From}${infer right}`
  // 这里递归要递归其它字符串，已匹配的不能再次计算
  // left 已经没有了！！！不用再匹配
  ? `${left}${To}${ReplaceAll<right, From, To>}`
  : S

type t = ReplaceAll<'foobarfoobar', 'ob', 'b'>