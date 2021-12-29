let numArr: number[] = [1,2,3]
let strArr: string[] = ['a','b','c']

type IPerson = { name: string, age?: number }
let personArr: IPerson[] = [
  { name: 'Jack', age: 33 },
  { name: 'Jane', age: 23 }
]

// 문자열과 배열 간 변환
// split(구분자: string): string[]
const split = (str: string, delim: string = ''): string[] => str.split(delim)
console.log(split('hello'))
console.log(split('h_e_l_l_o', '_'))

const join = (strArr: string[], delim: string = ''): string => strArr.join(delim)
console.log(['h', 'e', 'l', 'l', 'o'])
console.log(['h', 'e', 'l', 'l', 'o'], '_')