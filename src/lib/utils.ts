
export type Post = {
    name: string,
    title: string,
    date: string,
}

export type Metadata = {
    title: string,
    date: string,
    summary: string,
}

export function convertToMeta(unmapped: any): Metadata {
    const title = String(unmapped["title"]);
    const date = String(unmapped["date"]);
    const summary = String(unmapped["summary"]);
    return { title, date, summary }
}
