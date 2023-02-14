'use client'
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { TypingText, Homebanner } from "@/components"
import { motion } from "framer-motion";

import { FiMenu } from "react-icons/fi";

const headingText = "Maximize the potential of your wardrobe";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transiton: {
      delay: 0.8,
      staggerChildren: 0.1,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  }
}

export default function Home() {
  const { data: session } = useSession();
  const [isShown, setIsShown] = useState(true);
  const [active, setActive] = useState(1);
  const [width, setWidth] = useState(null);

  const menus = [
    'Dashboard',
    'Category',
    'T-Shirts',
    'Summer',
    'Winter',
  ]

  const FiMenuClickHandler = () => {
    setIsShown(!isShown);
    setWidth(16); 
  } 

  return (
    <>
      {session?.user ? (
        <div className={`h-screen ${isShown ? 'lg:w-72 md:w-48 sm:w-32 w-32' : 'w-[38px]'} border-r bg-slate-50`}>
          <div className="w-8 h-8 p-1">
            <button onClick={() => 
              FiMenuClickHandler()
            }><FiMenu size={'30px'} /></button>
          </div>
          {isShown && (
            <div>
              <div className={`mt-8 flex justify-center font-medium border-t border-b hover:font-bold hover:bg-slate-100 ${active == 1 ? 'font-bold bg-slate-200' : ''}`}>
                <Link href="/" className={`py-2`} onClick={() => setActive(1)}>{menus[0]}</Link>
              </div>
              <div className={`mt-8 flex justify-center font-medium border-t border-b hover:font-bold hover:bg-slate-100 ${active == 2 ? 'font-bold bg-slate-200' : ''}`}>
                <Link href="/" className={`py-2`} onClick={() => setActive(2)}>{menus[1]}</Link>
              </div>
              <div className={`mt-8 flex justify-center font-medium border-t border-b hover:font-bold hover:bg-slate-100 ${active == 3 ? 'font-bold bg-slate-200' : ''}`}>
                <Link href="/" className={`py-2`} onClick={() => setActive(3)}>{menus[2]}</Link>
              </div>
              <div className={`mt-8 flex justify-center font-medium border-t border-b hover:font-bold hover:bg-slate-100 ${active == 4 ? 'font-bold bg-slate-200' : ''}`}>
                <Link href="/" className={`py-2`} onClick={() => setActive(4)}>{menus[3]}</Link>
              </div>
              <div className={`mt-8 flex justify-center font-medium border-t border-b hover:font-bold hover:bg-slate-100 ${active == 5 ? 'font-bold bg-slate-200' : ''}`}>
                <Link href="/" className={`py-2`} onClick={() => setActive(5)}>{menus[4]}er</Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <main className="w-11/12 border mt-10 ml-4 lg:ml-16 md:ml-10 sm:ml-6 flex flex-col items-center justify-center">
          <div>
            <motion.h3
              className="text-3xl font-extrabold tracking-wide text-center mb-10"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {headingText.split('').map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })}
            </motion.h3>
          </div>

          <div className="w-full h-full flex justify-center">
            <Homebanner />
          </div>
        </main>
      )}
    </>
  )
}
