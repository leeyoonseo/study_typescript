abstract class Person {
  abstract name: string
  constructor(public age?: number) {}
}

class Jack extends Person {
  constructor(public name: string, age?: number) {
    super(age)
  }
}