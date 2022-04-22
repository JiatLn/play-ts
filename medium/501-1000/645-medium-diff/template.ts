type Diff<O, O1> = {
  [key in keyof (Omit<O, keyof O1> & Omit<O1, keyof O>)]:
  (O & O1)[key]
}