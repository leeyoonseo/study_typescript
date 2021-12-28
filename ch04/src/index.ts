type Person = { name: string, age: number }

// * 객체 반환 시 주의
// - 객체를 소괄호로 감싸주어야 컴파일러가 옳바르게 인식
// const makePerson = (name: string, age: number = 10): Person => { name, age } // X
const makePerson = (name: string, age: number = 10): Person => ({ name, age }) // O

console.log(makePerson('Jack')) // { name: 'Jack', age: 10 }
console.log(makePerson('Jack', 33)) // { name: 'Jack', age: 33 }