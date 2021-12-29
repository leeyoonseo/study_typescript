// const arrayLength = (array: T[]): number => array.length

const arrayLength = <T>(array: T[]): number => array.length
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0

let numArray: number[] = [1,2,3]
let strArray: string[] = ['a', 'b']

type IPerson = { name: string, age?: number }
let personArray: IPerson[] = [
  { name: 'Jack' },
  { name: 'Jane', age: 33 }
]

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]),
  isEmpty([1])
)