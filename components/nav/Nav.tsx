"use client"
import { useEffect, useState } from "react"
import Logo from "../Logo"

import { IoMenu, IoClose } from "react-icons/io5";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`w-screen px-4 md:px-8 h-fit ${isScrolled ? "py-1" : "py-3"} border-b border-white dark:border-black transition-all duration-200 fixed top-0 left-0 flex justify-between items-center bg-white/75 dark:bg-black/75 backdrop-blur-sm z-50`}>
      <Logo />
      <DesktopNav />
      <MobileNav isOpen={isMobileMenuOpen} />
      <button onClick={() => setIsMobileMenuOpen((previous) => !previous)} className="md:hidden z-50">
        {isMobileMenuOpen ? (<IoClose size="32" />) : (<IoMenu size="32" />)}
      </button>

    </nav>
  )
}


const DesktopNav = () => (
  <ul className="gap-4 font-bold text-xl hidden md:flex">
    <li className="hover:font-black hover:text-blue-500 hover:dark:text-yellow-400 transition-all duration-200">
      <a href="#about">About</a>
    </li>
    <li className="hover:font-black hover:text-blue-500 hover:dark:text-yellow-400 transition-all duration-200">
      <a href="#projects">Projects</a>
    </li>
    <li className="hover:font-black hover:text-blue-500 hover:dark:text-yellow-400 transition-all duration-200">
      <a href="#contact">Contact</a>
    </li>
  </ul>
)

const MobileNav = ({ isOpen }: { isOpen: boolean }) => (
  <div className={`absolute top-0 left-0 w-screen h-screen bg-slate-100 dark:bg-black z-40 flex p-8 items-center md:hidden ${isOpen ? "opacity-100 cursor-default" : "opacity-0 pointer-events-none"} transition-opacity duration-200`}>
    <ul className={`gap-4 grid font-bold uppercase text-3xl justify-start`}>
      <li className="hover:font-black hover:text-blue-500 hover:dark:text-yellow-400 transition-all duration-200">
        <a href="#about">About</a>
      </li>
      <li className="hover:font-black hover:text-blue-500 hover:dark:text-yellow-400 transition-all duration-200">
        <a href="#projects">Projects</a>
      </li>
      <li className="hover:font-black hover:text-blue-500 hover:dark:text-yellow-400 transition-all duration-200">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
)
