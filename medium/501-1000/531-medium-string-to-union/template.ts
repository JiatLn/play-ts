type StringToUnion<T extends string> =
  T extends '' ? never :
  T extends `${infer s}${infer rest}` ? s | StringToUnion<rest> : never