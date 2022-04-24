type StartsWith<T extends string, U extends string> =
  T extends `${infer tStart}${infer tRight}`
  ? U extends `${infer uStart}${infer uRight}`
  ? tStart extends uStart ? StartsWith<tRight, uRight>
  : false
  : true
  : false


