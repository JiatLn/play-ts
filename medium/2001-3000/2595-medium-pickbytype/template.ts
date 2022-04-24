type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P]
}



interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type test = PickByType<Model, boolean>