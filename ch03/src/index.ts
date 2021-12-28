import { IPerson, ICompany } from './interface'

let jack: IPerson = { name: 'Jack', age: 32 }
let jane: IPerson = { name: 'jane', age: 22 }

let apple: ICompany = { name: 'apple', age: 43 }
let ms: ICompany = { name: 'ms', age: 44 }

console.log(jack)
console.log(ms)

// 비구조화
let name = jack.name
let age = jack.age

// 비구조화 할당
let { name, age } = jack
