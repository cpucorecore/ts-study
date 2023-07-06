var Heap = require('qheap')

export type Person = {
    name: string,
    age: number
}

var heap = new Heap({
    comparBefore: (a: Person, b: Person) => {
        return a.age > b.age
    }
})

export default function testHeap() {
    heap.push({name:"a10", age: 10})
    heap.push({name:"a5", age: 5})
    heap.push({name:"a15", age: 15})
    
    console.log('heap.peek() = ', heap.peek())
    const p = heap.pop()
    console.log('heap.pop() = ', p)
    console.log('headp.peek() = ', heap.peek())

    console.log('\n')
}
