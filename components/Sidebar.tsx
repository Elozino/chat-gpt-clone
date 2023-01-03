import React from 'react'


interface IProps {
  clearChat: () => void
}

export const Sidebar = ({ clearChat }: IProps) => {
  return (
    <div className='hidden md:block w-1/5 md:w-80 bg-appDarkBg p-2'>
      <div
        onClick={clearChat}
        className='rounded-md border border-white p-2 px-4 text-white hover:text-appDarkBg hover:bg-gray-50 cursor-pointer'>
        <span className='mr-3 text-xl'>+</span>
        <span>New Chat</span>
      </div>
    </div>
  )
}
