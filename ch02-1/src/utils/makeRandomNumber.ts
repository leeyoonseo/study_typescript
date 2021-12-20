let maxAge = 100;

export function makeRandomNumber(max: number = maxAge): number {
  return Math.ceil((Math.random() * max))
}