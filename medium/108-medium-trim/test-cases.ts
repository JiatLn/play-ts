type MissChar = ' ' | '\t' | '\n'

type Trim<S extends string> =
  S extends `${MissChar}${infer Rest}`
  ? Trim<Rest>
  : S extends `${infer Rest}${MissChar}` ? Trim<Rest> : S


type test = Trim<'     str     '>

type flag = '1234566' extends `${infer aa}${5 | 6}` ? aa : 'not found'