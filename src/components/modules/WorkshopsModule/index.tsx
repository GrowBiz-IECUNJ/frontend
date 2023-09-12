import axios from "axios";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { WorkshopInterface } from "./interface";
import { useAuthContext } from "src/components/contexts/AuthContext";
import { IAuthContext } from "src/components/contexts/AuthContext/interface";
import { Button } from "flowbite-react";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export const WorkshopsModule: React.FC = () => {
  const [workshops, setWorkshops] = useState<WorkshopInterface[]>([]);
  const { jwt, user, loading }: IAuthContext = useAuthContext();

  useEffect(() => {
    axios
      .get("http://localhost:8000/workshops/workshop/")
      .then((response) => {
        console.log(response.data);
        setWorkshops(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [workshops, loading]);
  return (
    <>
      <div className="relative flex flex-col md:flex-row justify-center items-center pr-32 pl-32 pt-32 w-full">
        {/* left */}
        <ToastContainer />
        <div
          className="flex flex-col my-auto relative mb-10 leading-none
        text-center md:text-left 2xl:pl-[15vw]
        md:w-[50%] md:max-w-[55%] w-[100%] h-[80vw] md:h-fit mx-auto md:mx-0 md:mr-auto md:px-0 px-[10vw] sm:px-[8vw]"
        >
          <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
            GrowBiz is <p className="inline"></p>
          </h1>
          <br />
          <p className=" text-title-medium leading-normal">
            Welcome to Our Forum
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea atque
            exercitationem mollitia blanditiis, eveniet harum voluptatibus
            accusamus fuga fugiat voluptatem adipisci perspiciatis facere, nisi
            commodi eaque provident, ab officiis ad incidunt quam voluptate
            aliquid itaque. Nulla, distinctio qui nam ea voluptate illo odit
            assumenda id architecto, nihil eum debitis maiores.
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
        {/* 
        <Image
          width={200}
          height={150}
          alt="call to action"
          src="/assets/images/action-bubble.png"
          className="absolute right-[15vw] bottom-[10vw] z-20 md:w-fit md:h-fit w-0 h-0"
        /> */}

        {/* <div className="bg-red-300 ml-auto relative"> */}
        <Image
          height={200}
          width={200}
          className="
            absolute right-0 top-0 lg:mt-20 md:-mt-16 -mt-12 lg:w-[35vw] lg:h-[35vw]
            ml-auto md:w-[40vw] md:h-[40vw] w-0 h-0 z-10 mr-32
            "
          src="/assets/images/workshop.svg"
          alt=""
        />
        {/* </div> */}
      </div>
      <div className="p-20">
        {workshops.map((workshop) => (
          <>
            <div key={workshop.id} className="p-10">
              <div className=" w-full lg:max-w-full lg:flex">
                <div
                  className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  title="Mountain"
                ></div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      Members only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {workshop.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {workshop.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">John Smith</p>
                      <p className="text-gray-600">Aug 18</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
