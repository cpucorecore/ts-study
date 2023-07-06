export default function testNumber() {
    let n1 = 0.9563

    console.log('(%d).toFixed(2) = %d', n1, n1.toFixed(2))
    console.log('(%d).toPrecision(3) = %d', n1, n1.toPrecision(3))

    const n2 = 10
    console.log('%d || %d = %d', n1, n2, n1 || n2)
    console.log('%d && %d = %d', n1, n2, n1 && n2)

    n1 = 0
    console.log('%d || %d = %d', n1, n2, n1 || n2)
    console.log('%d && %d = %d', n1, n2, n1 && n2)
    console.log('(%d)? : ', n1, n1? "!=0" : "==0")

    n1 = 1
    console.log('(%d)? : ', n1, n1? "!=0" : "==0")

    testUnknown()
}

function testUnknown() {
    let a: unknown = 30
    console.log('a = %d', a)
    console.log('a == \'30\'', a == '30')
    console.log('a === \'30\'', a === '30')

    if(typeof a === 'number') {
        let b = a + 10
        console.log(b)
    }
}