import { Button } from 'flowbite-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const LETTER_INTERVAL_IN_MILLISECONDS = 65
const KEYWORD_INTERVAL_IN_MILLISECONDS = 1500
const KEYWORDS_LIST: string[] = ['Kembangkan bisnis UMKM bersama...']

export default function Hero() {
  const [keywordIndex, setKeywordIndex] = useState<number>(-1)
  const [currentKeyword, setCurrentKeyword] = useState<string>(
    'Kembangkan bisnis UMKM bersama...'
  )

  // functional, recursive logic for keyword animation

  function switchKeyword() {
    setKeywordIndex((prev) => (prev + 1) % KEYWORDS_LIST.length)
  }

  function writeKeyword(keyword: string) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.concat(keyword.slice(0, 1)))
      if (keyword.slice(1)) {
        writeKeyword(keyword.slice(1))
      } else {
        switchKeyword()
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS)
  }

  function sliceKeyword(len: number) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.slice(0, prev.length - 1))
      if (len > 1) {
        sliceKeyword(len - 1)
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS)
  }

  useEffect(() => {
    if (keywordIndex === -1) {
      setKeywordIndex(0)
      return
    }

    const len = currentKeyword.length
    if (len >= 1) {
      setTimeout(() => {
        sliceKeyword(len)
      }, KEYWORD_INTERVAL_IN_MILLISECONDS)
    } else {
      writeKeyword(KEYWORDS_LIST[keywordIndex])
    }
  }, [keywordIndex])

  useEffect(() => {
    if (!(currentKeyword.length >= 1)) {
      switchKeyword()
    }
  }, [currentKeyword])

  return (
    <>
      <div className="relative flex flex-col md:flex-row justify-center items-center mb-10 min-h-[40vw] w-full">
        {/* left */}
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="flex flex-col">
            <p className="inline text-3xl text-purple-light font-productSansBold font-black underlinable w-fit">
              {currentKeyword}
            </p>
            <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
              GrowBiz{' '}
            </h1>

            <br />
            <p className="text-left lg:text-xl md:text-xl text-lg">
              GrowBiz memberikan pelatihan dan pembelajaran kepada pemilik UMKM
              (Usaha Mikro, Kecil, dan Menengah) dan karyawan mereka. GrowBiz
              sebagai pusat komprehensif yang membantu UMKM tumbuh, belajar,
              berkolaborasi, dan mencapai tujuan bisnis dan pembangunan
              berkelanjutan mereka.
            </p>
            <br />
            <br />
            <Button
              className=" bg-purple-light w-[50%] hover:text-purple-light hover:bg-purple-lightest md:mr-auto md:mx-0 mx-auto"
              href="#about"
            >
              Yuk, eksplor!
            </Button>
          </div>
          <Image
            width={350}
            height={350}
            className="rounded-t-lg relative drop-shadow-md w-[60%] lg:w-[48%] mx-auto lg:p-12 p-5 md:mt-20 rounded-2xl"
            src="/assets/images/header-img.svg"
            alt="workshop"
          />
        </div>
      </div>
    </>
  )
}
