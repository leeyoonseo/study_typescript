class Person3 {
  // 멤버 변수 선언?
  name: string
  age?: Number

  constructor(name: string, age?: number) {
    this.name = name
    this.age = age
  }
}

let jack3: Person3 = new Person3('Jack', 32);
console.log(jack3)

interface IPerson4 {
  name: string
  age?: number
}

class Person4 implements IPerson4 {
  // 멤버 속성으로 포함?
  constructor(public name: string, public age?: number) {}
}
let jack4: IPerson4 = new Person4('Jack', 32)
console.log(jack4)