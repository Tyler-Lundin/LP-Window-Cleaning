import Image from "next/image";
import CleanerImage from "@/assets/cleaner.jpg"
import { IoInformationCircle } from "react-icons/io5";


export default function Description() {

  return (
    <section className="grid place-content-center h-min py-12 relative ">
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 items-center justify-center">
        <div className="self-center justify-self-center">
          <span className="w-[400px] h-[400px] border-2 border-blue-500 dark:border-yellow-400 absolute rounded-md -z-10 -translate-x-[40px] -translate-y-[40px] justify-self-center" />
          <span className="w-[400px] h-[400px] border-2 border-blue-500 dark:border-yellow-400 absolute rounded-md -z-10 translate-x-[40px] translate-y-[40px] justify-self-center" />
          <Image src={CleanerImage} alt="LP's Window Cleaning" width={400} height={400} className="rounded-md aspect-square object-cover" />
        </div>

        <div className="p-16 grid gap-2">
          <p className="text-center md:text-left text-lg">
            Experience brilliance with LP&apos;s Window Cleaning! We deliver top-tier, eco-friendly window cleaning for homes. Trust our expert team for exceptional, reliable service that transforms your space and lets natural light flood in.
          </p>
          <button className="w-fit flex items-center gap-2 justify-self-center md:justify-self-start px-4 py-2 bg-blue-500 dark:bg-yellow-400 text-white dark:text-black font-black rounded-md hover:scale-110 transition-all duration-200">
            LEARN MORE
            <IoInformationCircle />
          </button>
        </div>

      </div>
    </section>
  )
}
