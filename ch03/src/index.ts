interface IPerson { 
  name: string,
  age: number
}

let good: IPerson = { name: 'Jack', age: 32 } // 일치
let bad1: IPerson = { name: 'Jack' } // age가 없으므로 불일치
let bad2: IPerson = { age: 32 } // name이 없으므로 불일치
let bad3: IPerson = {} // 값이 없으므로 불일치
let bad4: IPerson = { name: 'Jack', age: 32, etc: true } // etc가 있으므로 불일치
