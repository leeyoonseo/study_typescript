import { makeRandomNumber } from '../utils/makeRandomNumber'
import IPerson from './Iperson'

export default class Person implements IPerson {
  constructor(public name: String, public age: number = makeRandomNumber()) {}
}

export const makePerson = (name: string, age:number = makeRandomNumber()) => ({ name, age })