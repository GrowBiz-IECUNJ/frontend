import React from 'react'
import { Props } from './interface'

export const DialogueCard: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <div
        className={`relative bg-white drop-shadow-md w-[85%] lg:w-[50%] mx-auto p-12 rounded-2xl ${className}`}
      >
        {children}
      </div>
    </>
  )
}
