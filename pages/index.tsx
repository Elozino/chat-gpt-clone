import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Sidebar } from '../components/Sidebar'
import { Main } from '../components/Main'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface IChatLog {
  question: string,
  answer: string
}

export default function Home() {
  const [input, setInput] = useState<string>("")
  const [chatLog, setChatLog] = useState<IChatLog[]>([])

  function clearChat() {
    setChatLog([])
  }
  return (
    <>
      <Head>
        <title>ChatGPT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen overflow-hidden">
        <Sidebar
          clearChat={clearChat}
        />
        <Main
          input={input}
          setInput={setInput}
          chatLog={chatLog}
          setChatLog={setChatLog}
        />
      </main>
    </>
  )
}