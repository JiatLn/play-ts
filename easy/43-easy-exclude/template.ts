type MyExclude<T, U> = T extends U ? never : T

let t: MyExclude<'a' | 'b' | 'c', 'b' | 'c'> = 'a'

// 上面的例子会对比 6 次
// a -> a === b a === c
// b -> b === b b === c
// c -> c === b c === c

type tt = typeof t