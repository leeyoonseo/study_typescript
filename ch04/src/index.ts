function fn(arg1: string, arg?: number): void {
  // ... 
}

fn('hello', 1)
fn('hello') // arg가 선택적 매개변수

type OptionalArgFunc = (string, number?) => void