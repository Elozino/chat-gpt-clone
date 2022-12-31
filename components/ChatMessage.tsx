import Image from 'next/image'
import React from 'react'
import logo from "../public/chatgpt.png"

export const ChatMessage = ({ chatLog }) => {
  return (
    <>
      <div className='bg-light p-4'>
        <div className='flex gap-10 w-5/6 md:w-2/3 m-auto'>
          <div className='w-10 h-10 rounded-full bg-gptBg'></div>
          <p className='mt-2 text-white '>
            {chatLog.question}
          </p>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex gap-10 w-5/6 md:w-2/3 m-auto'>
          {chatLog.answer && (
            <>
              <div>
                <div className='w-10 h-10 rounded-full bg-gptBg overflow-hidden'>
                  <Image src={logo} width={40} height={40} alt="logo"/>
                </div>
              </div>
              <p className='mt-2 text-white'>
                {chatLog.answer}
              </p>
            </>
          )}
        </div>
      </div >
    </>
  )
}