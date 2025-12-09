
// closure in Js

// simple #1
export function outer() {
    console.log("outer")
    let counter = 0

    function inner() {
        counter++
        console.log("inner")
        return counter
    }
    return inner
}

// simple #2
export function createCounter() {
    console.log("Create counter")
    let counter = 0
    return function () {
        counter++
        return counter
    }
}

export function createBankAccount() {
    console.log("Create Bank Account")
    let balance = 0

    return {
        deposit(amount: number) { balance += amount },
        getBalance() { return balance },
        withdraw(amount: number) { balance -= amount }
    }
}
