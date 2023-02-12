'use client'
import Link from "next/link";
import { useSession } from "next-auth/react";
import { TypingText, Homebanner } from "@/components"
import { motion } from "framer-motion";

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
  return (
    <>
      {session?.user ? (
        <div className="h-screen lg:w-72 md:w-48 sm:w-32 w-32 border bg-slate-50">
          <div className="mt-5 flex justify-center font-medium hover:font-bold hover:bg-slate-100 ">
            <Link href="/" >Dashboard</Link>
          </div>
          <div className="mt-5 flex justify-center font-medium hover:font-bold hover:bg-slate-100 ">
            <Link href="/" >Dashboard</Link>
          </div>
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
