type DeepReadonly<T extends Record<any, any>> = {
  readonly [key in keyof T]: T[key] extends string | number | symbol | Function | boolean
  ? T[key]
  : DeepReadonly<T[key]>
}




type X = {
  a: () => 22
  b: string
  e: false
  k: []
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type xx = DeepReadonly<X>

// 函数是 Record 的子集？？？
// https://github.com/microsoft/TypeScript/issues/41746
// true
type flag = Function extends Record<string, any> ? true : false
// false
type flag2 = Function extends Record<string, unknown> ? true : false


function doSomething(obj: Record<string, any>) {
  // ...
}

function doSomething2(obj: Record<string, unknown>) {
  // ...
}

doSomething(() => { })
// @ts-expect-error
doSomething2(() => { })