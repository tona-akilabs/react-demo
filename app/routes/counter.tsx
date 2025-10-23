// import {Counter} from "~/counter/counter";
import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Counter() {
    const handleClick = () => {
        console.log("Click");
    }

    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <div className="max-w-[300px] w-full space-y-6 px-4">
                    <p>Hi, ReactJs</p>
                    <button onClick={handleClick}>Click Me</button>
                </div>
            </div>
        </main>
    );
}