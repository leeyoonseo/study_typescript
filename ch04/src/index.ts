type Person = { name: string, age: number }

// * 매개변수 기본 값
const makePerson = (name: string, age: number = 10): Person => {
  const person = { name, age }
  return person
}

console.log(makePerson('Jack')) // { name: 'Jack', age: 10 }
console.log(makePerson('Jack', 33)) // { name: 'Jack', age: 33 }