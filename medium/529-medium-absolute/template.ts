type Absolute<T extends number | bigint | string> =
  `${T}` extends `-${infer n}` ? `${n}` : `${T}`