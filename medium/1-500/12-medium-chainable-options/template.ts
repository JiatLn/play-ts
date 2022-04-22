type Chainable<T extends Record<any, any> = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V):
    Chainable<T & Record<K, V>>
  get(): T
}

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  // @ts-expect-error
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()