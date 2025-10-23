import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('counter', 'routes/counter.tsx'),
    route(".well-known/appspecific/com.chrome.devtools.json", "routes/devtools-json.tsx"),
] satisfies RouteConfig;
