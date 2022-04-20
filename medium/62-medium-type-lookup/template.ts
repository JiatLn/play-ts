// type LookUp<U, T> = U extends { type: T } ? U : never

type LookUp<U, T> =
  U extends infer V
  ? T extends V[keyof V] ? V : never
  : never

// 兼容其它字段的查找 ↑
type aCat = LookUp<Animal, 'Shorthair'>

// V 是 猫或狗
// V[keyof V] 取某个字段的类型
// T 是该类型的某个，则 V 就是该动物

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

type c = Cat extends { type: 'cat' } ? 1 : 2

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog




