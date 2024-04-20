import Link from "next/link";

type Project = {
    name: string,
    href: string,
    summary: string,
    tech: string,
}

const projects: Project[] = [
    { name: "Boa", href: "https://github.com/boa-dev/boa", summary: "Open Source JavaScript Engine", tech: "Rust"},
    { name: "Conformance Redesign", href:"https://www.boajs.dev/conformance", summary: "Boa's Conformance Page Redesign", tech: "Docusaurus, React"},
    { name: "ixdtf", href: "https://github.com/unicode-org/icu4x/tree/main/utils/ixdtf", summary: "Parser for Internet Extended Date/Time Format", tech: "Rust"},
    { name: "temporal_rs", href: "https://github.com/boa-dev/temporal", summary: "A native Rust implementation of Temporal", tech: "Rust"},
]

export default function OpenSourcePanel() {
      return (
        <div className="flex flex-col justify-between flex-wrap">
            <h2 className="text-2xl my-6">{"Open Source Work:"}</h2>
            <div className="w-full h-auto min-h-20 block flex items-center flex-wrap">
                {projects
                    .map(item=> <LinkCard key={item.name} project={item} />)
                }
            </div>
        </div>
      )
}

type CardProps = {
    project: Project
}

function LinkCard(props: CardProps) {
    return (
        <Link key={props.project.name} className="min-h-28 w-full sm:h-52 sm:w-64 p-4 rounded border-double border-2 border-theme text-sm lg:text-xl m-1.5 hover:bg-theme" href={props.project.href}>
            <h3 className="text-lg lg:text-2xl">{props.project.name}</h3>
            <p className="text-sm p-1">{props.project.summary}</p>
            <p className="text-sm p-1">{"Tech: " + props.project.tech}</p>
        </Link>
    )
}