type PercentageParser<S extends string> =
  S extends `${infer left}%`
  ? [...ParserVal<left>, '%']
  : [...ParserVal<S>, '']

type ParserVal<S extends string> =
  S extends `${infer a}${infer b}`
  ? a extends '+' | '-' ? [a, b] : ['', `${a}${b}`]
  : ['', '']


type test = PercentageParser<'-100%'>