// type lower2upper<char extends string> =
//   char extends 'a' ? 'A'
//   : char extends 'b' ? 'B'
//   : char extends 'c' ? 'C'
//   : char extends 'd' ? 'D'
//   : char extends 'e' ? 'E'
//   : char extends 'f' ? 'F'
//   : char extends 'g' ? 'G'
//   : char extends 'h' ? 'H'
//   : char extends 'i' ? 'I'
//   : char extends 'j' ? 'J'
//   : char extends 'k' ? 'K'
//   : char extends 'l' ? 'L'
//   : char extends 'm' ? 'M'
//   : char extends 'n' ? 'N'
//   : char extends 'o' ? 'O'
//   : char extends 'p' ? 'P'
//   : char extends 'q' ? 'Q'
//   : char extends 'r' ? 'R'
//   : char extends 's' ? 'S'
//   : char extends 't' ? 'T'
//   : char extends 'u' ? 'U'
//   : char extends 'v' ? 'V'
//   : char extends 'w' ? 'W'
//   : char extends 'x' ? 'X'
//   : char extends 'y' ? 'Y'
//   : char extends 'z' ? 'Z'
//   : char

// type MyCapitalize<S extends string> =
//   S extends `${infer char}${infer other}`
//   ? `${lower2upper<char>}${other}`
//   : S

type MyCapitalize<S extends string> =
  S extends `${infer char}${infer other}`
  ? `${Uppercase<char>}${other}`
  : S

type test = MyCapitalize<''>