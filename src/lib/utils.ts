
export type Post = {
    name: string,
    title: string,
    date: string,
}

export type Metadata = {
    title: string,
    date: string,
}

export function convertToMeta(unmapped: any): Metadata {
    const title = String(unmapped["title"])
    const date = String(unmapped["date"]);
    return { title, date }
}
