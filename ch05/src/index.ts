const range = (from: number, to: number): number[] => {
  return from < to   
    ? [from, ...range(from + 1, to)]
    : []
}

let numbers: number[] = range(1, 9 + 1)
console.log(numbers)