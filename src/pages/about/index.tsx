import MarkdownDiplay from "@/components/MarkdownDisplay";
import { getAboutContent } from "@/lib/files";
import Head from "next/head";

type AboutProps = {
    content: string,
}

export default function About(props: AboutProps) {
    return (
        <div className={`flex min-h-screen flex-col items-center justify-between p-6 lg:p-16`}>
            <Head>
                <title>{"About | nekevss"}</title>
            </Head>
            <MarkdownDiplay content={props.content} />
        </div>
    )
}

export async function getStaticProps() {
    const aboutMe: string = await getAboutContent()

    return {
        props: {
            content: aboutMe
        },
    }
}
