type MyPick<T, K extends keyof T> = { [key in K]: T[key] };

function myPick(todo: Object, keys: any[]) {
  const obj = {};
  keys.forEach(key => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  });
  return obj
}

interface Person {
  name: string;
  age: number;
}


let a: MyPick<Person, 'name'> = {
  name: 'cx',
}
let b: keyof Person = 'age'

// keyof A 表示类型A的键
// docs: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;


type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

// M 推断为 string | number 是因为使用数字作为键时，js会强转为字符串
// 如 obj[1] -> obj['1']


// 什么是 extends ?

type T = '1' | '2' | '3';
type U = '1' | '2';
type X = true;
type Y = false;

let flag: U extends T ? X : Y = true;

// 上面语句的意思是 如果 U 是 T 的子集，则 flag 的类型是 X，否则是 Y
// 所以 flag 推断的类型是 X，可赋值为 true，如果赋值为 false，就会报错

// <T, K extends keyof T >
// 意思是：类型 K 是 类型 T 的键的组成集合的子集