import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-0 lg:p-24 ${inter.className}`}>
      <div className="flex flex-col w-screen p-6 lg:w-1/2 max-w-5xl items-left justify-between font-mono text-sm">
        <h1 className='text-4xl my-6'>{"Hi! My name's Kevin."}</h1>
        <h3 className="text-2xl my-4">{"A little bit about me:"}</h3>
        <p className='my-4'>
          {"I like programming, games, and nature (hiking, camping, and whatever). As you might guess, two of those things sort of get in the way of the other. 🤣"}
        </p>
        <p className='my-4'>
          {"Anyways, this personal site/blog is going to remain pretty bare bones right now. For a couple reasons: (1) I like the ideas of a minimal and elegant aesthetic, and (2) I'm hoping to use this site more as a staging ground/entry point for some other projects or ideas."}
        </p>
        <h3 className='my-4'>{"Here are some programming languages I've played around with:"}</h3>
        <ul className='list-disc list-inside'>
          <li>{"Rust (Comfortable)"}</li>
          <li>{"JavaScript/TypeScript (Comfortable)"}</li>
          <li>{"VBA (Comfortable-to-Ok)"}</li>
          <li>{"Golang (Ok...is anyone actually not comfortable in Go?)"}</li>
          <li>{"Python (Ok, haven't touched it in 3 years)"}</li>
          <li>{"C (Ok, it's been a long time since I touched it)"}</li>
          <li>{"Zig (Beginner, but am going to learn more)"}</li>
        </ul>
      </div>
      <Head>
        <title>{"Home | nekevss"}</title>
      </Head>
    </div>
  )
}
