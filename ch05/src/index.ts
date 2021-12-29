const identity = <T>(n: T): T => n
console.log(
  identity<boolean>(true),
  identity(true),
)

// 제네릭 형태로 구현된 함수는 원칙적으로 다음과 같은 형태로 명시
// 함수이름<타입변수>(매개변수)
// <타입변수>가 생략된 경우 타입 추론을 통해 생략된 타입을 찾아낸다