import {useState, useEffect, useEffectEvent, useMemo} from 'react'

export function Simple() {
    const [name, setName] = useState('')
    const [value, setValue] = useState('')

    useEffect(()=> {
        console.info('Hello, Simple App')
    })

    useEffectEvent(() => {
        console.info('Hello #2, Simple App')
    })

    const amount = useMemo(() => {
        return value ? parseFloat(value) * 2 : ''
    }, [value])

    return (
        <div className="flex flex-col w-full">
            <div className="w-1/2 max-w-sm min-w-[200px] p-5">
                <input
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Type here..."
                    onChange={e => setName(e.target.value)}
                />
                <p className="text-2xl">{name}</p>
            </div>
            <div className="w-1/2 max-w-sm min-w-[200px] p-5">
                <input
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="amount"
                    type="number"
                    onChange={e => setValue(e.target.value)}
                />
                <p className="text-2xl">{amount}</p>
            </div>
        </div>
    )
}