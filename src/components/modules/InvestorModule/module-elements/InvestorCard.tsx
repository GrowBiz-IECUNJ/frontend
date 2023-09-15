import React, { useState } from 'react'
import { Props } from './interface'
import Image from 'next/image'
import { Button } from 'flowbite-react'
import { ALink } from '@elements'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { Inevstor } from '../interface'
import axios from 'axios'

export const InvestorCard: React.FC<Props> = ({
  investor,
  className,
  handler,
}) => {
  const { jwt }: IAuthContext = useAuthContext()

  return (
    <>
      <div
        className={`
        ${className}    
        relative bg-white drop-shadow-md w-[250px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
      >
        <Image
          src={investor.photo}
          alt="foto"
          width={500}
          height={500}
          className="object-cover w-[250px] h-[200px] rounded-t-2xl"
        />
        <div className="flex flex-col gap-x-6 px-6 pt-6">
          <h1 className="text-title-large">{investor.name}</h1>
          <p>{investor.description}</p>
          {/* <p className="mt-3 mb-6">Rp. {investor.price}</p> */}
        </div>
        <div className="flex justify-center gap-x-6 px-6 pb-6">
          <ALink
            className="text-purple-light"
            uppercase={false}
            href={`http://localhost:3000/incubation/investor/${investor.id}`}
          >
            View more
          </ALink>
          <Button
            className="bg-indigo-500"
            // disabled={!jwt || investor.stock == 0}
          >
            {jwt ? 'Add to Cart' : 'Login dulu!'}
          </Button>
        </div>
      </div>
    </>
  )
}
