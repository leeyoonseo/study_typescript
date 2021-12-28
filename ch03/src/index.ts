// * person의 변수 타입은 object
// * object 타입은 name 속성을 가지지 않으므로 오류
// let person: object = { name: 'Jack' }
// console.log(person.name)

// * 타입 변환 구문을 통해 일시적으로 속성 값 주입
let person: object = { name: 'Jack' }
console.log((<{name: string}>person).name)
