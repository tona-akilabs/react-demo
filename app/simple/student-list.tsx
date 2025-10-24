import React, { useState, useMemo, useEffect, useCallback } from 'react'

type Student = {
    name: string
    score: number
}

enum Result {
    Passed = 'Passed',
    Failed = 'Failed',
}

export function StudentList() {

    const [students, setStudents] = useState<Student[]>([
        {
            name: 'Dara',
            score: 65,
        },
        {
            name: 'Kong',
            score: 45,
        }
    ])

    useEffect(() => {
        console.info('Student list loaded')
    })

    const onScoreChange = (student: Student)=> {
        console.info('Student score changed: ', student)

    }


    return (
        <div
            className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <table className="w-full text-left table-auto min-w-max">
                <thead>
                <tr>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Name
                        </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Scores
                        </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Result
                        </p>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((student: Student) => <StudentRowMemo student={student} onScoreChange={onScoreChange} />)
                }
                </tbody>
            </table>
        </div>
    )
}

function StudentRow(props: any) {
    console.info(props)
    // const { student } = props
    const [student, setStudent] = useState<Student>({ ...props.student })

    useEffect(() => {
        console.info('Student row loaded')
    })

    const result = useMemo(() => student.score >= 50 ? Result.Passed : Result.Failed, [student])

    const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudent({ ...props.student, score: event.target.value })
    }



    return (
        <tr>
            <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {student.name}
                </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                {/*<p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {student.score}
                </p>*/}
                <input
                    className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="amount"
                    type="number"
                    onChange={handleScoreChange}
                    value={student.score}
                />
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {result}
                </p>
            </td>
        </tr>
    )
}

type StudentRowProp = {
    student: Student,
    onScoreChange: Function
}
const StudentRowMemo = React.memo<StudentRowProp>((props: {
    student: Student,
    onScoreChange: Function,
}) => {
    const { student, onScoreChange } = props;

    const [rowValue, setRowValue] = useState<Student>(student)

    useEffect(() => {
        console.info('Student row loaded')
    })

    const result = useMemo(() => rowValue.score >= 50 ? Result.Passed : Result.Failed, [rowValue])

    const handleScoreChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onScoreChange({ ...student, score: event.target.value })
        setRowValue({ ...student, score: parseFloat(event.target.value) })
    }, [student])



    return (
        <tr>
            <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {rowValue.name}
                </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <input
                    className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="amount"
                    type="number"
                    onChange={handleScoreChange}
                    value={rowValue.score}
                />
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {result}
                </p>
            </td>
        </tr>
    )
})