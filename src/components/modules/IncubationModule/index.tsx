import axios from 'axios'
import { Button, Spinner, TextInput } from 'flowbite-react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Incubation } from './interface'
import { IncubationCard } from './module-elements/InvestorCard'
import Image from 'next/image'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
// import { CartFooter } from '@elements'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const IncubationModule: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined)
  const [incubations, setIncubations] = useState<Incubation[] | null>()
  const { loading }: IAuthContext = useAuthContext()

  const router = useRouter()

  useEffect(() => {
    axios
      .get('http://localhost:8000/incubations/incubation/')
      .then((response) => {
        console.log('risaaa')
        console.log(response.data)
        setIncubations(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [incubations])

  return (
    <>
      <main className="relative w-full min-h-screen 2xl:px-[20vw] lg:py-20 md:py-20 py-24 lg:px-32 md:px-16 px-3 text-sm bg-slate-50">
        <ToastContainer />
        <h1 className="py-12 text-display-medium text-purple-light text-center">
          Daftar Inkubasi
        </h1>
        <div className="flex py-6 w-full justify-around gap-x-2">
          <TextInput
            id="searchQuery"
            type="text"
            placeholder="Contoh: Antler"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="w-full"
          />
          <Button className="bg-purple-light">
            <Image
              src="/assets/images/icons/search.svg"
              width={24}
              height={24}
              alt="search"
            />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-8">
          {incubations ? (
            incubations?.map((incubation: Incubation, key: number) => (
              <IncubationCard
                key={key}
                incu={incubation}
                handler={toast.error}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </main>
    </>
  )
}
