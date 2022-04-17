type Concat<T extends any[], U extends any[]> = [...T, ...U]



type c = Concat<[1], [2, 1]>