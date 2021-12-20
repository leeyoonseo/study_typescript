interface IPerson { 
  name: string, // 필수
  age: number, // 필수
  etc?: boolean // 선택
}

let bad1: IPerson = { name: 'Jack' } // age가 없으므로 불일치
let bad2: IPerson = { age: 32 } // name이 없으므로 불일치
let bad3: IPerson = {} // 값이 없으므로 불일치

let good1: IPerson = { name: 'Jack', age: 32 } // 일치
let good2: IPerson = { name: 'Jack', age: 32, etc: true } // 선택 속성으로 인해 일치
