const range = (from: number, to: number): number[] => {
  return from < to   
    ? [from, ...range(from + 1, to)]
    : []
}

const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) => {
  let result: T = initValue;
  for(let i = 0; i < array.length; i++) {
    const value = array[i]
    result = callback(result, value)
  }

  return result
}

// 입력타입 T가 출력타입 Q로 바뀔수 있다는 전제로 구현
const map = <T, Q>(array: T[], callback: (value: T, index?: number) => Q): Q[] => {
  let result: Q[] = []
  for (let index = 0; index < array.length; ++index) {
    const value = array[index]
    result = [...result, callback(value, index)]
  }
  return result
}

let numbers: number[] = range(1, 100 + 1)
let result = fold(
  map(numbers, value => value * value),
  (result, value) => result + value, 0
)

console.log(result)