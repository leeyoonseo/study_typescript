type Person = { name: string, age: number }

// 매개변수 비구조화 할당
const printPerson = ({name, age}: Person): void => {
  console.log(`name: ${name}, age: ${age}`)
}

printPerson({ name: 'Jack', age: 33 })