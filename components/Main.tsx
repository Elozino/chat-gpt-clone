import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { ChatMessage } from './ChatMessage'


interface IChatLog {
  question: string,
  answer: string
}

interface IProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  chatLog: IChatLog[]
  setChatLog: Dispatch<SetStateAction<IChatLog[]>>;
}


export const Main = ({ input, setInput, chatLog, setChatLog, }: IProps) => {

  async function handleSubmit(e: {
    target: any; preventDefault: () => void
  }) {
    e.preventDefault()
    if (input !== "") {
      setInput("")
      setChatLog([...chatLog, { question: `${input}`, answer: "" }])
      const res = await fetch(`/api`, {
        method: "POST",
        headers: {

          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: input
        })
      })
      const data = await res.json()
      setChatLog([...chatLog, { question: `${input}`, answer: `${data.trim()}` }])
    }
  }



  return (
    <div className='w-full bg-appBg flex flex-col justify-between'>
      <div className='h-full overflow-y-scroll'>
        {chatLog.map((item, i) => (
          <ChatMessage key={i} chatLog={item} />
        ))}
      </div>
      <div className='my-5'>
        <form onSubmit={handleSubmit} className="w-full flex justify-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='h-10 p-2 w-11/12 bg-inputBg shadow-md text-white rounded-md outline-none'
            placeholder='Type your message here...' />
        </form>
      </div>
    </div>
  )
}