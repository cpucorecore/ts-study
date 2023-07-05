var Heap = require('qheap')

type Person = {
    name: string,
    age: number
}

var heap = new Heap({
    comparBefore: (a: Person, b: Person) => {
        return a.age > b.age
    }
})

heap.push({name:"a10", age: 10})
heap.push({name:"a5", age: 5})
heap.push({name:"a15", age: 15})

console.log(heap.peek())

console.log("hello")