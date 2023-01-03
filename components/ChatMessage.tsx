import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "../public/chatgpt.png"
import icon from "../public/icon.svg"


interface IProps {
  chatLog: {
    question: string;
    answer: string;
  }

}
export const ChatMessage = ({ chatLog }: IProps) => {
  const [loadText, setLoadText] = useState(".")
  let text: string;
  let loadingInterval;

  function loading() {
    text = ".";
    loadingInterval = setInterval(() => {
      text += ".";
      setLoadText(text)
      if (text > "...") {
        text = "";
        setLoadText(text)
      }
    }, 1000);

    if (chatLog.answer) {
      clearInterval(loadingInterval)
    }
  }

  useEffect(() => {
    loading();
  })




  return (
    <>
      <div className='bg-light p-4'>
        <div className='flex gap-10 w-5/6 md:w-2/3 m-auto'>
          <div className='w-10 h-10 rounded-full bg-gptBg'>
            <Image src={icon} width={40} height={40} alt="icon" />
          </div>
          <p className='mt-2 text-white '>
            {chatLog.question}
          </p>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex gap-10 w-5/6 md:w-2/3 m-auto'>
          {
            chatLog.answer == undefined ? (
              <>
                <div>
                  <div className='w-10 h-10 rounded-full bg-gptBg overflow-hidden'>
                    <Image src={logo} width={40} height={40} alt="logo" />
                  </div>
                </div>
                <p className='mt-2 text-red-500'>
                  You just encountered server errors
                </p>
              </>
            ) : chatLog.answer == "" ? (
              <>
                <div>
                  <div className='w-10 h-10 rounded-full bg-gptBg overflow-hidden'>
                    <Image src={logo} width={40} height={40} alt="logo" />
                  </div>
                </div>
                <p className='mt-2 text-white'>
                  {loadText}
                </p>
              </>
            ) : (
              <>
                <div>
                  <div className='w-10 h-10 rounded-full bg-gptBg overflow-hidden'>
                    <Image src={logo} width={40} height={40} alt="logo" />
                  </div>
                </div>
                <p className='mt-2 text-white'>
                  {chatLog.answer}
                </p>
              </>
            )
          }

        </div>
      </div >
    </>
  )
}
