// * type 키워드로 타입 별칭 만들기
type stringNumberFunc = (string, number) => void

let f: stringNumberFunc = function (a: string, b: number): void {
  // ....
}

let g: stringNumberFunc = function (c: string, d: number): void {
  // ....
}

// * 오류나는 상황 확인
let h: stringNumberFunc = function () {
  // ...
}