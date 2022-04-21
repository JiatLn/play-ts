type AppendArgument<Fn extends Function, A> =
  Fn extends (...args: infer P) => infer R ? (...args: [...P, A]) => R
  : unknown


type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type test = AppendArgument<(a: number, b: string) => number, boolean>