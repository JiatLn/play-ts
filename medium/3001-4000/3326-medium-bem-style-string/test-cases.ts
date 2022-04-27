type BEM<B extends string, E extends string[], M extends string[]> =
  E extends []
  ? `${B}--${M[number]}`
  : M extends []
  ? `${B}__${E[number]}`
  : `${B}__${E[number]}--${M[number]}`



type test = BEM<'btn', ['danger'], ['small', 'medium', 'large']>