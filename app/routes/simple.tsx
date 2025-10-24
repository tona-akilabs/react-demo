import type {Route} from "../../.react-router/types/app/routes/+types/home";
import {Simple} from "~/simple/simple";


export function meta({}: Route.MetaArgs) {
    return [
        { title: "Simple App" },
        { name: "description", content: "Welcome to Simple App!" },
    ];
}

export default function SimpleApp() {
    return <Simple />
}
