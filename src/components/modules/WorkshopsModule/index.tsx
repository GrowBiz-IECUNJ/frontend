import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import { Vendor, WorkshopInterface } from './interface'
import { Button, Spinner, TextInput } from 'flowbite-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DialogueCard } from '../AuthModule/module-elements/DialogueCard'
import { Product } from '../ProductModule/interface'
import { ProductCard } from '../ProductModule/module-elements/ProductCard'
import { WorkshopCard } from './module-elements/WorkshopCard'

export const WorkshopsModule: React.FC = () => {
  const [workshops, setWorkshops] = useState<WorkshopInterface[] | null>()
  const { jwt, user, loading }: IAuthContext = useAuthContext()

  useEffect(() => {
    axios
      .get('http://localhost:8000/workshops/workshop/')
      .then((response) => {
        console.log(response.data)
        setWorkshops(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [workshops, loading])

  return (
    <>
      <div className="flex flex-col bg-blue-light relative1 justify-center items-center w-full h-full">
        <div className=" w-10/12 lg:pt-10 md:pt-28 pt-24">
          <ToastContainer />
          <br />

          <div className="flex lg:flex-row flex-col justify-center ite">
            <div className="flex flex-col justify-center items-center">
              {/* <h1 className="py-6 text-3xl  text-display-medium text-purple-light text-center">
                Vendor
              </h1>
              <p className="text-center px-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur, assumenda?
              </p> */}

              <h1 className="text-grey-dark text-left lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                GrowBiz Workshops <p className="inline"></p>
              </h1>
              <br />
              <p className=" text-title-medium leading-normal w-10/12">
                Welcome to Our Forum
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                atque exercitationem mollitia blanditiis, eveniet harum
                voluptatibus accusamus fuga fugiat voluptatem adipisci
                perspiciatis facere, nisi commodi eaque provident, ab officiis
                ad incidunt quam voluptate aliquid itaque. Nulla, distinctio qui
                nam ea voluptate illo odit assumenda id architecto, nihil eum
                debitis maiores.
              </p>
            </div>
            <Image
              width={350}
              height={350}
              className="rounded-t-lg relative drop-shadow-md w-[85%] lg:w-[40%] mx-auto lg:p-12 p-5 rounded-2xl"
              src="/assets/images/workshop.svg"
              alt="workshop"
            />
          </div>
        </div>

        <div className="w-full">
          <h1 className="pt-14 text-3xl text-display-medium text-purple-light text-center">
            Daftar Workshops
          </h1>
          <p className="text-center px-6 mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            assumenda?
          </p>
          <div className="grid grid-cols-1 my-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-8">
            {workshops ? (
              workshops?.map((workshop: WorkshopInterface, key: number) => (
                <WorkshopCard
                  key={key}
                  workshop={workshop}
                  handler={toast.error}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
