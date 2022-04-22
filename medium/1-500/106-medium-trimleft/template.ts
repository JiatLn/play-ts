type MissChar = ' ' | '\t' | '\n'

type TrimLeft<S extends string> =
  S extends '' ? '' :
  S extends `${infer ch}${infer other}`
  ? ch extends MissChar ? TrimLeft<other> : S
  : never


type c = TrimLeft<'  123'>

type test = 'a' extends `${infer ch}${infer other}` ? other : never