import OpenSourcePanel from '@/components/OpenSourceWork'
import ProjectPanel from '@/components/ProjectDisplay'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-0 lg:p-24 ${inter.className}`}>
      <div className="flex flex-col w-screen p-6 lg:w-5/6 max-w-6xl items-left justify-between font-mono text-sm">
        <h1 className='text-4xl my-6'>{"Hi! I'm Kevin."}</h1>
        <p className='my-4 text-xl'>
          {"Welcome to my minimal portfolio site and blog."}
        </p>
        <p className='my-4 text-md'>
          {`I am an open-source software engineer with 4+ years of experience
            developing production applications and contributing to open-source
            projects and over a year experience as an open-source maintainer.
            I enjoy identifying issues or areas of improvement and developing
            solutions to address those areas.`}
        </p>
        <OpenSourcePanel />
        <ProjectPanel />
      </div>
      <Head>
        <title>{"Home | nekevss"}</title>
        <meta name="description" content = "Development portfolio and blog site for random writings and projects." />
      </Head>
    </div>
  )
}
