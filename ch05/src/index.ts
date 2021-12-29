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

const filter = <T>(array: T[], callback: (value: T, index?: number) => boolean): T[] => {
  let result: T[] = []
  for (let index: number = 0; index < array.length; ++index) {
    const value = array[index]
    if (callback(value, index)) {
      result = [...result, value]
    }

    return result
  }
}

let numbers: number[] = range(1, 100 + 1)
const isOdd = (n: number): boolean => n % 2 != 0
let result = fold(
  filter(numbers, isOdd),
  (result, value) => result + value, 0
)

console.log(result)