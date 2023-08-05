import { addClasses } from "@/lib/rehype-polyfill"


type MarkdownDisplayProps = {
    content: string,
}

export default function MarkdownDiplay(props: MarkdownDisplayProps) {
    // The below can one day be replaced with `rehype-add-classes` if
    // the maintainer ever removes the vulnerabilities in it's dependencies.
    const content = addClasses(props.content, [
        ["h1", "class", "text-2xl font-bold text-center my-8"],
        ["h2", "class", "text-xl font-bold text-center my-8"],
        ["h3", "class", "text-lg font-bold text-center my-8"],
        ["p", "class", "my-6"],
        ["code", "class", "bg-lime-950 rounded-sm font-mono px-0.5",]
    ])

    return (
        <div
            dangerouslySetInnerHTML={{__html: content}}
            className="min-h-min w-4/6 mx-auto my-8 justify-items-between">
        </div>
    )
}