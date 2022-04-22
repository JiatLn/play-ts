type RemoveIndexSignature<T> = {
  [key in keyof T as key extends `${infer R}` ? R : never]: T[key]
}

type Foo = {
  [key: string]: any
  foo(): void
}

type test = RemoveIndexSignature<Foo>

type t = keyof Foo