import {Counter} from "~/counter/counter";
import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Counter App" },
        { name: "description", content: "Welcome to Counter App!" },
    ];
}

export default function Count() {
    return <Counter />;
}