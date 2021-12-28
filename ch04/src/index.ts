// js
const makeObject = (key, value) => ({ [key]: value })

// ts
type KeyValueType = {
  [key: string]: string
}

const makeObjectTs = (key: string, value: string): KeyValueType => ({ [key]: value })