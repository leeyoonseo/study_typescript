class A {
  value: number = 1
  method: () => void = function(): void {
    console.log(`value: ${this.value}`) // 1
  }
}

// A의 개선
class B  {
  constructor(public value: number = 1) {}
  method(): void {
    console.log(`value: ${this.value}`)
  }
}

let b: B = new B(2)
b.method() // value: 2