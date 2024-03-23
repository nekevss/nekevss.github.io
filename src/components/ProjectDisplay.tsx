import Link from "next/link";

type Project = {
    name: string,
    href: string,
    summary: string,
    tech: string,
}

const projects: Project[] = [
    { name: 'Boa Debugger', href: 'https://nekevss.github.io/boa-debugger', summary: "Web debugger proof of concept for boa.", tech: "Rust, WASM, TypeScript, React, TailwindCSS, Next.js"},
    { name: "Conformance Redesign", href:"https://www.boajs.dev/conformance", summary: "Conformance Page Redesign", tech: "Docusaurus, React"},
    { name: "Product Content QA App", href:"https://github.com/nekevss/productcontentdesktopapp", summary: "Content quality assurance Electron application", tech: "Electron, React, JavaScript, SASS"},
    { name: "Broken Image Finder", href: "https://github.com/nekevss/scrappy-scraper", summary: "A CLI tool for finding broken images", tech: "Golang, VBA"},
    { name: "File Badger", href: "https://github.com/nekevss/badger", summary: "MS-OVBA specification implementation", tech: "Rust, VBA"},
    { name: "Image Retriever", href: "https://github.com/nekevss/ImageRetriever", summary: "A URL image fetcher with Druid", tech: "Rust"}
]

export default function ProjectPanel() {
      return (
        <div className="flex flex-col justify-between flex-wrap">
            <h2 className="text-2xl my-6">{"Projects:"}</h2>
            <div className="w-full h-auto min-h-20 block flex items-center flex-wrap">
                {projects
                    .map(item=> <ProjectCard key={item.name} project={item} />)
                }
            </div>
        </div>
      )
}

type CardProps = {
    project: Project
}

function ProjectCard(props: CardProps) {
    return (
        <Link key={props.project.name} className="min-h-28 w-full sm:h-52 sm:w-64 p-4 rounded border-double border-2 border-theme text-sm lg:text-xl m-1.5 hover:bg-theme" href={props.project.href}>
            <h3 className="text-lg lg:text-2xl">{props.project.name}</h3>
            <p className="text-sm p-1">{"Summary: " + props.project.summary}</p>
            <p className="text-sm p-1">{"Tech: " + props.project.tech}</p>
        </Link>
    )
}
