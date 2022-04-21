type AppendToObject<T, U extends string | number | symbol, V> = {
  [key in (keyof T | U)]: key extends keyof T ? T[key] : V
}


type test1 = {
  key: 'cat'
  value: 'green'
}

type test = AppendToObject<test1, 'home', boolean>