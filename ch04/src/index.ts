// const add1 = (a: number, b: number): number => a + b // 보통함수
// const add2 = (a: number): (number) => number => (b: number): number => a + b // 고차함수

// const result = add2(1)(2)
// console.log(result) // 3

// * 고차함수 풀이

// * 함수 시그니처
// number 타입을 매개변수로 받는다
// number 타입의 값을 반환한다
type NumberToNumberFunc = (number) => number

const add = (a: number): NumberToNumberFunc => {
  // NumberToNumberFunc 타입의 함수 반환
  const _add: NumberToNumberFunc = (b: number) => {
    return a + b // 클로저
  }
  
  return _add
}

let fn: NumberToNumberFunc = add(1) // a가 담김
let result: NumberToNumberFunc = fn(2) // b가 담김
console.log(result) //3
console.log(add(1)(2)) // 3

// * 3차 고차함수
const multiply = a => b => c => a * b * c
console.log(multiply(1)(2)(3))