import ProjectPanel from '@/components/ProjectDisplay'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-0 lg:p-24 ${inter.className}`}>
      <div className="flex flex-col w-screen p-6 lg:w-5/6 max-w-6xl items-left justify-between font-mono text-sm">
        <h1 className='text-4xl my-6'>{"Hi! My name's Kevin."}</h1>
        <p className='my-4 text-xl'>
          {"Welcome to my minimal portfolio site and blog."}
        </p>
        <p className='my-4 text-md'>
          {"A brief introduction: I like programming, games, and nature (hiking, camping, etc.). Always looking to learn more and challenge myself."}
        </p>
        <ProjectPanel />
      </div>
      <Head>
        <title>{"Home | nekevss"}</title>
        <meta name="description" content = "Development portfolio and blog site for random writings and projects." />
      </Head>
    </div>
  )
}
