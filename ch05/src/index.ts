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

// 입력 데이터 생성
let numbers: number[] = range(1, 100 + 1)

// 입력 데이터 가공
let result = fold(numbers, (result, value) => result + value, 0)
console.log(result)