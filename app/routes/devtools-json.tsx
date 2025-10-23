export async function loader() {
    return new Response("{}", { headers: { "content-type": "application/json" } });
}
export default function DevtoolsJson() { return null; }