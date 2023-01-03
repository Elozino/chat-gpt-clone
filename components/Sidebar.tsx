import React from 'react'
import { IChatLog } from '../pages';


interface IProps {
  clearChat: () => void;
  chatLog: IChatLog[];
}

export const Sidebar = ({ clearChat, chatLog }: IProps) => {
  console.log(chatLog.reverse())
  return (
    <div className='hidden md:block w-1/5 md:w-80 bg-appDarkBg p-2'>
      <div
        onClick={clearChat}
        className='rounded-md border border-white p-2 px-4 text-white hover:text-appDarkBg hover:bg-gray-50 cursor-pointer'>
        <span className='mr-3 text-xl'>+</span>
        <span>New Chat</span>
      </div>
      <div className=''>
        {[...chatLog]?.reverse().map((item: any, i: React.Key | null | undefined) => (
          <div key={i} className="p-2 bg-zinc-500 rounded-md my-2">
            <p className='text-white '>{item.question}</p>
          </div>
        ))}
      </div>
    </div>
  )
}