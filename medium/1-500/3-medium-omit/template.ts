
type MyOmit<T, K extends keyof T> =
  { [key in Exclude<keyof T, K>]: T[key] }


interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

type t = MyOmit<Todo, 'description'>