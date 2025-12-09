import {Activity, useMemo, useState} from 'react'
import {Welcome} from "~/welcome/welcome";
import {createBankAccount, createCounter, outer} from "~/helpers/closure";

export function Counter() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        console.log("Click");
        setCount(count + 1)
        //setCount((count) => count + 1)
    }

    const fnCounter = outer()
    console.log(fnCounter())
    console.log(fnCounter())

    const acc = createBankAccount()
    acc.deposit(10000)
    console.log(acc.getBalance())
    acc.deposit(5000)
    console.log(acc.getBalance())
    acc.withdraw(2000)
    console.log(acc.getBalance())

    const isVisible = useMemo(() => count > 5, [count])

    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <div className="max-w-[300px] w-full space-y-6 px-4">
                    <p>Hi, ReactJs</p>
                    <button onClick={handleClick}>Click Me { count }</button>
                </div>
                {/*{ isVisible && <Welcome /> }*/}
                <Activity mode={ isVisible ? 'visible' : 'hidden'  }>
                    <Welcome />
                </Activity>
            </div>
        </main>
    );
}