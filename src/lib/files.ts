import * as matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import path from "path";
import fs from "fs";
import { Metadata, Post, convertToMeta } from "@/lib/utils";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

// TODO: handle `highlightjs-zig` better.
// This is so cursed: manually changed `highlightjs-zig` to es5 module to get the below to work.
import { hljsZig } from "@/vendor/highlightjs-zig/src/languages/zig";

const workingDir = process.cwd();
const blogDirectory = path.join(workingDir, "blog");

// NOTE: The below will have to be made more robust if I ever want to do folders...

export function getAllBlogs(): string[] {
    return fs.readdirSync(blogDirectory, "utf-8");
}

export function getAllBlogIds(): string[] {
    const blogs = getAllBlogs();
    const mdx = /.md$|mdx$/gi;

    return blogs.map(blogName => blogName.replace(mdx, ""));
}

export function getBlogCardData(): Post[] {
    const blogs = getAllBlogs();
    const mdx = /.md$|mdx$/gi;

    return blogs.map((fileName) =>{
        const targetPath = path.join(blogDirectory, fileName);
        const { data } = matter.read(targetPath);

        const meta = convertToMeta(data);

        return {
            name: fileName.replace(mdx, ""),
            title: meta.title,
            date: meta.date,
        }
    })
}

type ZippedPost = {
    slug: string,
    meta: Metadata,
    content: string,
    summary: string,
}

const zipSlug = async (slug: string): Promise<ZippedPost> => {
    let data = await getBlogEntryBySlug(slug);
    return {slug, meta: data.meta, content: data.content, summary: data.meta.summary}
}

export async function getBlogEntries() {
    let blogs = getAllBlogIds();
    
    // Zip slug with response.
    let blogPosts = await Promise.all(blogs.map((blog)=>{return zipSlug(blog)}))

    return blogPosts.sort((a: ZippedPost, b: ZippedPost) => {
        return +new Date(a.meta.date) - +new Date(b.meta.date);
    }).reverse()
}

function retrieveFilePath(fileName: string): string {
    return fs.existsSync(path.join(blogDirectory, fileName + ".md"))
        ? path.join(blogDirectory, fileName + ".md")
        : path.join(blogDirectory, fileName + ".mdx");
}

export async function getBlogEntryBySlug(id: string) {
    const targetPath = retrieveFilePath(id)
    const {data, content} = matter.read(targetPath)

    const rehypedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeHighlight, {languages: {"zig": hljsZig}})
        .use(rehypeStringify)
        .process(content);

    const meta = convertToMeta(data);

    return {meta, content: String(rehypedContent)};
}


exports.module = {
    getAllBlogs, getAllBlogIds, getBlogEntryBySlug
}
