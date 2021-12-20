let n = 1 // number
let b = true; // boolean
let s = 'hello' // string
let o = {} // object

// 타입 추론에 의해 여전히 타입 불일치 오류
n = 'a'
b = 1
s = false

// 타입 일치
o = { name: 'Jack', age: 32 }