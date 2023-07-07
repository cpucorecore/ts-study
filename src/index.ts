import createFibonacciGenerator from "./function/generator"
import { log, log2, sum } from "./function/parameter"
import testHeap from "./heap"
import testNumber from "./types/number"
import testSymbol from "./types/symbol"

testHeap()

testNumber()

testSymbol()

// test Optional parameter
log('test')
log('test', 'sky')

// test default parameter
log2('test')
log2('test', 'sky')

// test variable length parameter
console.log(sum())
console.log(sum(1))
console.log(sum(1, 2, 3))

// function sum(...vs: number[]) { ... }
console.log(sum.apply(null, [1, 2]))
console.log(sum.call(null, 10, 20))
console.log(sum.bind(null, 10, 30)())

// test generator function
let fib = createFibonacciGenerator()
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())