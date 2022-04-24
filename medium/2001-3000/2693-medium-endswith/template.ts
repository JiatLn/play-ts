// type EndsWith<T extends string, U extends string> =
//   U extends ''
//   ? true
//   : T extends `${infer TBefore}${GetTailOfString<T>}`
//   ? U extends `${infer UBefore}${GetTailOfString<U>}`
//   ? GetTailOfString<T> extends GetTailOfString<U>
//   ? EndsWith<TBefore, UBefore> : false
//   : never : never

// type GetTailOfString<S extends string> =
//   S extends
//   `${infer a}${infer Other}` ? Other extends '' ? a : GetTailOfString<Other> : S

type EndsWith<T extends string, U extends string> =
  T extends U
  ? true
  : T extends `${infer _}${infer Rest}`
  ? EndsWith<Rest, U>
  : false

type test = EndsWith<'abcbcadsadw', 'bcadsadw'>


