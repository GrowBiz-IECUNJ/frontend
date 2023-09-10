import { Button } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const LETTER_INTERVAL_IN_MILLISECONDS = 65;
const KEYWORD_INTERVAL_IN_MILLISECONDS = 1500;
const KEYWORDS_LIST: string[] = ["business"];

export default function Hero() {
  const [keywordIndex, setKeywordIndex] = useState<number>(-1);
  const [currentKeyword, setCurrentKeyword] = useState<string>("business");

  // functional, recursive logic for keyword animation

  function switchKeyword() {
    setKeywordIndex((prev) => (prev + 1) % KEYWORDS_LIST.length);
  }

  function writeKeyword(keyword: string) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.concat(keyword.slice(0, 1)));
      if (keyword.slice(1)) {
        writeKeyword(keyword.slice(1));
      } else {
        switchKeyword();
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS);
  }

  function sliceKeyword(len: number) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.slice(0, prev.length - 1));
      if (len > 1) {
        sliceKeyword(len - 1);
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS);
  }

  useEffect(() => {
    if (keywordIndex === -1) {
      setKeywordIndex(0);
      return;
    }

    const len = currentKeyword.length;
    if (len >= 1) {
      setTimeout(() => {
        sliceKeyword(len);
      }, KEYWORD_INTERVAL_IN_MILLISECONDS);
    } else {
      writeKeyword(KEYWORDS_LIST[keywordIndex]);
    }
  }, [keywordIndex]);

  useEffect(() => {
    if (!(currentKeyword.length >= 1)) {
      switchKeyword();
    }
  }, [currentKeyword]);

  return (
    <>
      <div className="relative flex flex-col md:flex-row justify-center items-center mb-10 min-h-[40vw] w-full">
        {/* left */}
        <div
          className="flex flex-col relative mb-10 leading-none
        text-center md:text-left 2xl:pl-[15vw]
        md:w-[50%] md:max-w-[55%] w-[100%] h-[80vw] md:h-fit mx-auto md:mx-0 md:mr-auto md:px-0 px-[10vw] sm:px-[8vw]"
        >
          <h1 className="text-black lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perspiciatis quidem fugiat voluptatibus repellat ex rem, voluptates
            sed illo atque.
            <p className="inline text-blue-darkest font-productSansBold font-black underlinable w-fit">
              {currentKeyword}
            </p>
            <p className="inline">.</p>
          </h1>
          <br />
          <p className=" text-title-medium leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perspiciatis quidem fugiat voluptatibus repellat ex rem, voluptates
            sed illo atque.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perspiciatis quidem fugiat voluptatibus repellat ex rem, voluptates
            sed illo atque.
          </p>
          <br />
          <br />
          <Button
            className=" bg-blue-dark w-[50%] hover:bg-blue-darkest md:mr-auto md:mx-0 mx-auto"
            href="#about"
          >
            Yuk eksplor!
          </Button>
        </div>

        {/* <Image
          width={200}
          height={150}
          alt="call to action"
          src="/assets/images/action-bubble.png"
          className="absolute right-[15vw] bottom-[10vw] z-20 md:w-fit md:h-fit w-0 h-0"
        /> */}

        {/* <Image
          height={320}
          width={320}
          className="
            absolute right-0 top-0 lg:-mr-32 md:-mr-16 -mr-3 lg:-mt-20 md:-mt-16 -mt-12
            ml-auto md:w-[40vw] md:h-[40vw] w-0 h-0 z-10
            "
          src="/assets/images/hero-image.png"
          alt=""
        /> */}
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              We invest in the world’s potential
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div>
            <iframe
              className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src="https://www.youtube.com/embed/KaLxCiilHns"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
