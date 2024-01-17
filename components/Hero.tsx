import { FaRegHandPointRight } from "react-icons/fa6";

export default function Hero() {

  return (
    <section className="flex flex-col items-center justify-center relative w-screen h-screen top-0 left-0">
      <video src={require("../assets/hero.mp4")} className="w-screen h-screen object-cover absolute top-0 left-0 -z-10" autoPlay muted loop />
      <div className="flex flex-col items-center justify-center gap-4 absolute top-0 left-0 w-screen h-screen bg-gradient-to-r from-white via-white/40 to-transparent dark:from-black dark:via-black/50 dark:to-transparent z-10">
        <span className="grid text-center">
          <h1 className="font-black uppercase text-6xl"> WINDOW CLEANING </h1>
          <h3 className=" font-light text-xl">
            Professional,
            Friendly,
            &
            Affordable!
          </h3>
        </span>
        <button className="px-4 py-2 bg-blue-500 dark:bg-yellow-400 text-white dark:text-black font-black text-3xl rounded-md hover:scale-110 transition-all duration-200">
          FREE QUOTE
          <FaRegHandPointRight className="inline-block ml-2 mb-1 self-center" />
        </button>
      </div>

    </section>
  )
}
