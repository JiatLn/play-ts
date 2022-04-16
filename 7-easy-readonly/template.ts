type MyReadonly<T> = { readonly [key in keyof T]: T[key] }


let arr: MyReadonly<number[]> = [1, 2, 3]

// arr.push(4)
// 上面会报错 因为 arr 是 readonly 的 number[]，不能修改