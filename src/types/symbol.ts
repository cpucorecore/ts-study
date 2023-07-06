export default function testSymbol() {
    let a = Symbol('a') // make a unique symbol with name('a')
    let b: symbol = Symbol('a') // make a new unique symbol with the same name('a')
    console.log(a==b)   // false
    console.log(a===b)  // false
}