type MyReturnType<T extends (...args: any[]) => any> =
  T extends (...args: any[]) => infer R
  ? R
  : never


const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2

type t = MyReturnType<typeof fn>
type t1 = MyReturnType<typeof fn1>

