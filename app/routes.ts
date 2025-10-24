import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('counter', 'routes/counter.tsx'),
    route('simple', 'routes/simple.tsx'),
] satisfies RouteConfig;
