import fs from 'fs';
import { getBlogEntries } from "@/lib/files";
import { Feed } from "feed";

// Adapting from next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS || false
export const siteURL = isGithubActions ? "https://nekevss.github.io" : "";

export async function createRssFeed() {
    const blogPosts = await getBlogEntries();
    // TODO: Switch to Temporal on release.
    const date = new Date();
    const author = {
        name: "Kevin Ness",
        email: "nekevss@gmail.com",
        link: siteURL
    };

    const feed = new Feed({
        title: "Nekevss' Blog",
        description: "Random blogging and things that interest me.",
        id: siteURL,
        link: siteURL,
        image: "./images/favicon.ico",
        favicon: "./images/favicon.ico",
        copyright: `All rights reserved ${date.getFullYear()}, Kevin Ness`,
        updated: date,
        feedLinks: {
            rss2: `${siteURL}/rss/feed.xml`,
            json: `${siteURL}/rss/feed.json`
        },
        author
    })

    blogPosts.forEach((post)=>{
        const blogURL = `${siteURL}/blog/${post.slug}`;
        feed.addItem({
            title: post.meta.title,
            id: blogURL,
            link: blogURL,
            description: post.meta.summary,
            author: [author],
            contributor: [author],
            date: new Date(post.meta.date),
        })
    })

    fs.mkdirSync("./public/rss", {recursive: true});
    fs.writeFileSync("./public/rss/feed.xml", feed.rss2())
    fs.writeFileSync("./public/rss/feed.json", feed.json1())
}