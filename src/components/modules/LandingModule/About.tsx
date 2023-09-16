import Image from 'next/image'

export default function About() {
  return (
    <>
      <div
        className="relative flex flex-col md:flex-row gap-10 justify-center items-center mb-10 min-h-[45vw]"
        id="about"
      >
        <Image
          height={320}
          width={320}
          className="relative lg:-mx-32 md:-mx-16 -mx-3 2xl:w-[30vw] 2xl:h-[30vw] xl:w-[35vw] xl:h-[35vw] md:w-[40vw] md:h-[40vw] w-0 h-0 rounded-lg"
          src="/assets/images/about.svg"
          alt=""
        />
        <div className="lg:pl-32 md:pl-16 pl-3">
          <h1 className="text-center md:text-left relative lg:text-display-medium mb-10 md:text-display-small text-display-small font-bold leading-none text-purple-light">
            GrowBiz memfasilitasi koneksi dengan investor yang membantu
            pengusaha mengatasi hambatan keuangan dalam pertumbuhan bisnis
            mereka
          </h1>
          <a
            href="#2"
            className="block relative text-center md:text-left group-hover:text-purple-500 transition-colors duration-200 2xl:pr-[30vw] lg:pr-32 md:pr-8 pr-3"
          >
            GrowBiz memberikan pengusaha UMKM akses ke berbagai sumber daya dan
            layanan tambahan yang memungkinkan mereka untuk berbagi pengalaman
            dan pengetahuan dengan sesama pengusaha, pelatihan online yang
            membantu mereka meningkatkan keterampilan bisnis, dan layanan
            inkubasi yang mendukung perkembangan bisnis startup.
          </a>
        </div>
      </div>
    </>
  )
}
