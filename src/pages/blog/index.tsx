import BlogCard from "@/components/BlogCard";
import { getBlogCardData } from "@/lib/files";
import { Post } from "@/lib/utils";
import Head from "next/head";

type BlogProps = {
    posts: Post[],
}

export default function Blog(props: BlogProps) {
    return (
        <div className={`flex min-h-screen flex-col items-center justify-between p-6 lg:p-24`}>
            <Head>
                <title>{"Blog | nekevss"}</title>
            </Head>
            <h1>Welcome to my blog! Feel free to check out some of the posts below.</h1>
            <div className= {"flex flex-col min-h-screen w-full justify-items-center"}>
                {props.posts.sort((a: Post, b: Post)=> {
                    return +new Date(a.date) - +new Date(b.date)
                }).reverse().map(post=>{
                    return <BlogCard key={post.name} post={post} />
                })}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const posts: Post[] = getBlogCardData()

    return {
        props: {
            posts
        },
    }
}
