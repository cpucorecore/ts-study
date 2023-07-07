// Optional parameter
export function log(msg: string, userId?: string) {
    let time = new Date().toLocaleString()
    console.log(time, msg, userId || 'Not signed in')
}

// parameter with default value
export function log2(msg: string, userId = 'Not signed in') {
    let time = new Date().toISOString()
    console.log(time, msg, userId)
}

// Variable length parameters
export function sum(...vs: number[]) {
    return vs.reduce((total, n) => total + n, 0)
}