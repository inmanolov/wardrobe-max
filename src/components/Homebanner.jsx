'use client'
import React from "react";
import { motion } from "framer-motion";

const Homebanner = () => {
    return (
        <div className="relative h-96 w-full flex bg-blue-100 overflow-x-hidden">
            {/* <div className="absolute w-[350px] h-[350px] bg-red-100 rounded-full flex justify-center -left-16 -top-5" /> */}

            <div className="relative w-[95px] h-[145px] bg-blue-500 left-96 top-10 rotate-45 max-md:-translate-x-[50px] max-lg:scale-75 max-sm:scale-50 max-sm:-translate-x-[305px] max-lg:-translate-x-[55px]">
                <div className="absolute w-[65px] h-[30px] bg-blue-500 -left-6 "/>
                <div className="absolute w-[65px] h-[30px] bg-blue-500 -right-6 "/>
            </div>

            <div className="absolute w-[95px] h-[145px] bg-green-500 left-60 top-10 max-lg:scale-75 max-md:-translate-x-[50px] max-sm:scale-50 max-sm:-translate-x-56 max-lg:-translate-x-[50px]">
                <div className="absolute w-[65px] h-[30px] bg-green-500 -left-6 "/>
                <div className="absolute w-[65px] h-[30px] bg-green-500 -right-6 "/>
            </div>

            <div className="absolute w-[95px] h-[145px] bg-yellow-500 left-[590px] top-10 max-lg:scale-75 max-md:-translate-x-[140px] max-sm:scale-50 max-sm:-translate-x-[450px] max-lg:-translate-x-[150px]">
                <div className="absolute w-[65px] h-[30px] bg-yellow-500 -left-6 "/>
                <div className="absolute w-[65px] h-[30px] bg-yellow-500 -right-6 "/>
            </div>

            <div className="absolute w-[95px] h-[145px] -rotate-[75deg] bg-lime-500 left-[750px] top-10 max-lg:scale-75 max-lg:-translate-x-[150px] max-md:-translate-x-[190px] max-sm:scale-50 max-sm:-translate-x-[500px]">
                <div className="absolute w-[65px] h-[30px] bg-lime-500 -left-6 "/>
                <div className="absolute w-[65px] h-[30px] bg-lime-500 -right-6 "/>
            </div>

            <div className="absolute left-60 top-[205px] max-lg:scale-75 max-md:-translate-x-[150px] max-sm:scale-50 max-sm:-translate-x-[50px] max-lg:-translate-x-[90px]">
                <div className="absolute w-[48px] h-[90px] bg-gray-300 rotate-12" />
                <div className="absolute w-[3px] h-[3px] bg-neutral-900 left-[49px] z-10 top-[8px] rounded-full" />
                <div className="absolute w-[3px] h-[3px] bg-neutral-900 left-[49px] z-10 top-[14px] rounded-full" />
                <div className="absolute w-[48px] h-[90px] bg-gray-300 left-[55px] -rotate-12" />
            </div>

            <div className="absolute left-[520px] top-[205px] rotate-12 max-lg:scale-75 max-md:-translate-x-[190px] max-sm:scale-50 max-sm:-translate-x-[400px]">
                <div className="absolute w-[48px] h-[90px] bg-blue-400 rotate-12" />
                <div className="absolute w-[3px] h-[3px] bg-neutral-900 left-[49px] z-10 top-[8px] rounded-full" />
                <div className="absolute w-[3px] h-[3px] bg-neutral-900 left-[49px] z-10 top-[14px] rounded-full" />
                <div className="absolute w-[48px] h-[90px] bg-blue-400 left-[55px] -rotate-12" />
            </div>

            <div className="absolute left-[60px] top-10 w-[95px] h-[145px] bg-cyan-400 max-lg:scale-75 max-sm:left-[240px] max-sm:top-[150px] max-sm:scale-50">
                <div className="absolute bg-blue-100 w-[22px] h-[70px] rounded-br-3xl -top-[2px] -left-[2px] -top-[2px] max-sm:-left-[2px] max-sm:-top-[2px]" />
                <div className="absolute bg-blue-100 w-[18px] h-8 rounded-b-3xl left-[38.5px] max-sm:-top-[2px]" />
                <div className="absolute right-0 bg-blue-100 w-[22px] h-[70px] rounded-bl-3xl -right-[2px] -top-[2px] max-sm:-right-[2px] max-sm:-top-[2px]" />
            </div>

            <div className="absolute left-[672px] top-[190px] max-sm:left-[165px] max-lg:-translate-x-[350px] max-md:-translate-x-[150px] max-sm:top-[150px] w-[95px] h-[145px] bg-cyan-400 max-lg:scale-75 max-sm:scale-50 rotate-12">
                <div className="absolute bg-blue-100 w-[22px] h-[70px] rounded-br-3xl -left-[2px] -top-[2px] max-sm:-left-[2px] max-sm:-top-[2px]" />
                <div className="absolute bg-blue-100 w-[18px] h-8 rounded-b-3xl border-t-0 left-[38.5px] max-sm:
                -top-[2px]" />
                <div className="absolute right-0 bg-blue-100 w-[22px] h-[70px] rounded-bl-3xl -right-[2px] -top-[2px] max-sm:-right-[2px] max-sm:-top-[2px]" />
            </div>

            {/*---------------------------------------------------------------------------*/}

            <div className="absolute max-md:invisible max-xl:invisible max-lg:invisible max-sm:invisible left-[920px] top-10 w-[95px] h-[145px] bg-cyan-400 max-lg:scale-75 max-sm:left-[240px] max-sm:top-[150px] max-sm:scale-50">
                <div className="absolute bg-blue-100 w-[22px] h-[70px] rounded-br-3xl max-sm:-left-[2px] max-sm:-top-[2px]" />
                <div className="absolute bg-blue-100 w-[18px] h-8 rounded-b-3xl left-[38.5px] max-sm:-top-[2px]" />
                <div className="absolute right-0 bg-blue-100 w-[22px] h-[70px] rounded-bl-3xl max-sm:-right-[2px] max-sm:-top-[2px]" />
            </div>

            <div className="absolute max-xl:invisible rotate-[10deg] w-[95px] h-[145px] bg-green-500 left-60 top-[190px] left-[900px] max-lg:scale-75 max-md:-translate-x-[50px] max-sm:scale-50 max-sm:-translate-x-56 max-lg:-translate-x-[50px]">
                <div className="absolute w-[65px] h-[30px] bg-green-500 -left-6 "/>
                <div className="absolute w-[65px] h-[30px] bg-green-500 -right-6 "/>
            </div>

            <div className="absolute max-2xl:invisible left-[1100px] top-[205px] rotate-12 max-lg:scale-75 max-md:-translate-x-[190px] max-sm:scale-50 max-sm:-translate-x-[400px]">
                <div className="absolute w-[48px] h-[90px] bg-blue-400 rotate-12" />
                <div className="absolute w-[3px] h-[3px] bg-neutral-900 left-[49px] z-10 top-[8px] rounded-full" />
                <div className="absolute w-[3px] h-[3px] bg-neutral-900 left-[49px] z-10 top-[14px] rounded-full" />
                <div className="absolute w-[48px] h-[90px] bg-blue-400 left-[55px] -rotate-12" />
            </div>

            <div className="absolute max-2xl:invisible w-[95px] h-[145px] bg-yellow-500 left-[1090px] top-10 max-lg:scale-75 max-md:-translate-x-[140px] max-sm:scale-50 max-sm:-translate-x-[450px] max-lg:-translate-x-[150px]">
                <div className="absolute w-[65px] h-[30px] bg-yellow-500 -left-6 "/>
                <div className="absolute w-[65px] h-[30px] bg-yellow-500 -right-6 "/>
            </div>

            <div className="absolute max-2xl:invisible max-sm:invisible left-[1280px] top-10 w-[95px] h-[145px] bg-cyan-400 max-lg:scale-75 max-sm:left-[240px] max-sm:top-[150px] max-sm:scale-50">
                <div className="absolute bg-blue-100 w-[22px] h-[70px] rounded-br-3xl max-sm:-left-[2px] max-sm:-top-[2px]" />
                <div className="absolute bg-blue-100 w-[18px] h-8 rounded-b-3xl left-[38.5px] max-sm:-top-[2px]" />
                <div className="absolute right-0 bg-blue-100 w-[22px] h-[70px] rounded-bl-3xl max-sm:-right-[2px] max-sm:-top-[2px]" />
            </div>

            <div className="absolute max-2xl:invisible rotate-[10deg] max-sm:invisible left-[1425px] top-10 w-[95px] h-[145px] bg-cyan-400 max-lg:scale-75 max-sm:left-[240px] max-sm:top-[150px] max-sm:scale-50">
                <div className="absolute bg-blue-100 w-[22px] h-[70px] rounded-br-3xl -left-[2px] -top-[2px]" />
                <div className="absolute bg-blue-100 w-[18px] h-8 rounded-b-3xl left-[38.5px] -top-[2px]" />
                <div className="absolute right-0 bg-blue-100 w-[22px] h-[70px] rounded-bl-3xl -right-[2px] -top-[2px]" />
            </div>

            <div className="absolute max-2xl:invisible rotate-[-5deg] w-[95px] h-[145px] bg-green-500 left-[1310px] top-[190px] max-lg:scale-75 max-md:-translate-x-[50px] max-sm:scale-50 max-sm:-translate-x-56 max-lg:-translate-x-[50px]">
                <div className="absolute w-[65px] h-[30px] bg-green-500 -left-6 "/>
                <div className="absolute w-[65px] h-[30px] bg-green-500 -right-6 "/>
            </div>

            {/* <motion.div
                className="w-32 h-32 bg-orange-200"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            /> */}
        </div>
    )
}

export default Homebanner;