import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { Vendor, WorkshopInterface } from './interface'
import { Button, Spinner, TextInput } from 'flowbite-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
      <div className="flex flex-col bg-blue-light relative justify-center items-center w-full h-full">
        <div className=" w-10/12 lg:pt-10 md:pt-28 pt-24">
          <ToastContainer />

          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div className="flex flex-col">
              <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                GrowBiz is <p className="inline"></p>
              </h1>
              <br />
              <p className=" text-title-medium leading-normal">
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
              <br />
              <br />
              <Button
                className=" bg-purple-light w-[50%] hover:text-purple-light hover:bg-purple-lightest md:mr-auto md:mx-0 mx-auto"
                href="#about"
              >
                Yuk eksplor!
              </Button>
            </div>
            <Image
              width={350}
              height={350}
              className="rounded-t-lg relative drop-shadow-md w-[60%] lg:w-[48%] mx-auto lg:p-12 p-5 md:mt-20 rounded-2xl"
              src="/assets/images/workshop.svg"
              alt="workshop"
            />
          </div>
        </div>

        <div className="w-full mt-14">
          <h1 className="text-purple-light text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
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
