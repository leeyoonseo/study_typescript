// * 함수의 타입 = 함수 시그니처(function signature)
// * 형태
// (매개변수1 타입, 매개변수2 타입[, ...]) => 반환값 타입

let printMe: (string, number) => void = function (name: string, age: number): void {
  // ....
}

// * 매개변수와 반환값이 없을 경우 () => void
