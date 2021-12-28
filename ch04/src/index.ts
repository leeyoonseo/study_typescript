// * 기본 함수 구성 형태
function Person(name: string, age: number): void {
  // ....
}

// * 예시
function add(a: number, b: number): number {
  return a + b
}

let result = add(1,2)

// * 반환 값이 없을때
function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`)
}