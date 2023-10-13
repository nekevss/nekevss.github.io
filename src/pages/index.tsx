import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-0 lg:p-24 ${inter.className}`}>
      <div className="flex flex-col w-screen p-6 lg:w-1/2 max-w-5xl items-left justify-between font-mono text-sm">
        <h1 className='text-4xl my-6'>{"Hi! My name's Kevin."}</h1>
        <h2 className="text-2xl my-4">{"A little bit about me:"}</h2>
        <p className='my-4'>
          {"I like programming, games, and nature. As you might guess, two of those things sort of get in the way of the other. Always looking to learn more and challenge myself."}
        </p>
        <p className='my-4'>
          {"Anyways, this portfolio site/blog is going to remain pretty bare bones right now. For a couple reasons: (1) I like the idea of a more minimal and elegant aesthetic, and (2) I'm hoping to use this site more as a staging ground/entry point for some other projects or ideas."}
        </p>
        <h3 className='my-4'>{"Here's a non-exhaustive list of languages I'm familiar with:"}</h3>
        <ul className='list-disc list-inside'>
          <li>{"Rust"}</li>
          <li>{"JavaScript/TypeScript"}</li>
          <li>{"VBA"}</li>
          <li>{"Golang"}</li>
          <li>{"Python"}</li>
        </ul>
      </div>
      <Head>
        <title>{"Home | nekevss"}</title>
        <meta name="description" content = "Development portfolio and blog site for random writings and projects." />
      </Head>
    </div>
  )
}
